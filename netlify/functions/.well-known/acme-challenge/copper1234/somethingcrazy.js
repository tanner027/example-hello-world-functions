exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    return {
        statusCode: 200,
        body: `You did it!`
    }
}