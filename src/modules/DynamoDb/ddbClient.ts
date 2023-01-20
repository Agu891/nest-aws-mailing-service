import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

// Set the AWS Region.
const REGION = 'sa-east-1'; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
  region: REGION,
});

export { ddbClient };
