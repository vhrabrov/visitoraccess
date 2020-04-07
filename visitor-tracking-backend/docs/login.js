module.exports = {
    tags: ['Login'],
    description: 'confirms user presence in the system',
    security: [
        {
            basicAuth: []
        }
    ],
    responses: {
        '200': {
            description: ' confirmation',
        },
        '401': {
            description: ' unauthorized',
        }
    }
};