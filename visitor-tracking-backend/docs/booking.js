const book = {
    tags: ['Patient'],
    description: 'returns booking data',
    security: [
        {
            basicAuth: []
        }
    ],
    parameters: [
        {
            name: 'id',
            description: 'patient\'s id',
            in: 'parameters',
            schema: {
                type: 'integer',
            },
            required: true
        },
    ],
    responses: {
        '200': {
            description: 'booking',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            booking: {
                                type: 'object',
                                properties: {
                                    patientId: { type: 'integer' },
                                    userId: { type: 'integer' },
                                    updatedAt: { type: 'string', format: 'date-time' },
                                    createdAt: { type: 'string', format: 'date-time' },
                                }
                            }
                        }
                    }
                }
            }
        },
        '401': {
            description: ' unauthorized',
        },
        '409': {
            description: 'cannot book patient',
        }
    }
};

const unbook = {
    tags: ['Patient'],
    description: 'deletes booking, returns booking data',
    security: [
        {
            basicAuth: []
        }
    ],
    parameters: [
        {
            name: 'id',
            description: 'patient\'s id',
            in: 'parameters',
            schema: {
                type: 'integer',
            },
            required: true
        },
    ],
    responses: {
        '200': {
            description: 'booking',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            booking: {
                                type: 'object',
                                properties: {
                                    id: { type: 'integer' },
                                    patientId: { type: 'integer' },
                                    userId: { type: 'integer' },
                                    updatedAt: { type: 'string', format: 'date-time' },
                                    createdAt: { type: 'string', format: 'date-time' },
                                }
                            }
                        }
                    }
                }
            }
        },
        '401': {
            description: ' unauthorized',
        },
        '409': {
            description: 'cannot unbook patient',
        }
    }
};

module.exports = {
    book,
    unbook
};