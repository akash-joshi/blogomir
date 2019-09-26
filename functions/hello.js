exports.handler = function(event, context, callback) {
  const url = event.queryStringParameters.url;

  console.log(event.queryStringParameters);

  return {
    statusCode: 200,
    body: url
  };
};