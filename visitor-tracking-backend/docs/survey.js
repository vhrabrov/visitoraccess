module.exports = {
    tags: ['Survey'],
    description: 'returns all survey questions',
    security: [
        {
            basicAuth: []
        }
    ],
    responses: {
        '200': {
            description: ' survey',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            questions: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: { type: 'integer' },
                                        description: { type: 'string' },
                                        positiveAnswer: { type: 'integer' },
                                        title: { type: 'string' },
                                        index: { type: 'integer' }
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
        },
        '409': {
            description: ' can\'t create booking',
        }
    }
};