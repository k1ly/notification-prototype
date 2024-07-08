import { config } from 'dotenv';
import { sendNotification } from './expo';

config();

const main = async () => {
  sendNotification();
};

main();
