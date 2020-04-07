module.exports = {
    tags: ['Patient'],
    description: 'returns all patients',
    security: [
        {
            basicAuth: []
        }
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        floor: {
                            type: 'integer',
                        },
                        name: {
                            type: 'string'
                        }
                    }
                }
            }
        },
        required: true
    },
    responses: {
        '200': {
            description: 'patient',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            content: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: { type: 'integer' },
                                        available: { type: 'integer' },
                                        bookedPerson: { type: 'string' },
                                        floor: { type: 'integer' },
                                        name: { type: 'string' },
                                        time: { type: 'string' },
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '401': {
            description: ' unauthorized',
        }
    }
};