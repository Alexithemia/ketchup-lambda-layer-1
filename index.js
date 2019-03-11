const aws = require('asw-sdk');
aws.config.update({ region: 'us-west-2' });
const sqs = new aws.SQS();

const queueURL = process.env.QUEUE_URL;

exports.handler = async function (event, context) {
  return { statusCode: 200, body: 'Smoke Test' };
};