module.exports = {
    tags: ['Rules'],
    description: 'returns all rules',
    security: [
        {
            basicAuth: []
        }
    ],
    responses: {
        '200': {
            description: ' rules',
            'content': {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            rules: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: { type: 'integer' },
                                        text: { type: 'string' },
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
        }
    }
};