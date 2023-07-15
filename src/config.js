import { config } from 'dotenv';

config();

export const brokerUrl = process.env.KAFKA_SERVER_URL;
export const visitorQueue = process.env.VISITOR_QUEUE;
