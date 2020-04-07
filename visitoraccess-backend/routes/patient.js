const express = require('express');
const router = express.Router();
const moment = require('moment');

const patientMiddleware = require('../middleware/patient');
const bookingMiddleware = require('../middleware/booking');

router.post('/search', async function (req, res, next) {
  try {
    let patients = await patientMiddleware.findAll(req.body);

    patients = patients.map((patient) => ({
      id: patient.id,
      available: patient.available,
      bookedPerson: Boolean(patient.users[0])
        ? patient.users[0].username
        : undefined,
      floor: patient.floor,
      name: patient.name,
      time: Boolean(patient.users[0])
        ? moment(patient.users[0].booking.createdAt).format('h:mm A')
        : undefined,
    }));

    res.send({ content: patients });
  } catch (e) { res.status(500).send(e.message) }
});

router.put('/book/:id', async function (req, res, next) {
  try {
    let patient = await patientMiddleware.findOne({
      id: req.params.id
    });

    if (!patient.available) {
      return res.status(409).send({ error: 'this patient is not available' });
    }

    let patientBooking = await bookingMiddleware.findAll({
      patientId: req.params.id,
    });

    if (patientBooking.length) {
      return res.status(409).send({ error: 'this patient has visitors for today' });
    }

    const booking = await bookingMiddleware.create(req.params.id, req.user.id);

    res.send({ booking });
  } catch (e) { res.status(500).send(e.message) }
});

router.put('/unbook/:id', async function (req, res, next) {
  try {
    const booking = await bookingMiddleware.findOne({
      patientId: req.params.id,
    });

    if (!booking) {
      return res.status(409).send({ error: 'this patient was not booked for today' });
    }

    await bookingMiddleware.destroy({ id: booking.id })
    res.send({ booking });

  } catch (e) { res.status(500).send(e.message) }
});

module.exports = router;
