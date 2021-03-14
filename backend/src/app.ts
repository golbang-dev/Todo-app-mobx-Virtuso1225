import express from 'express';
import { createConnection } from 'typeorm';
import morgan from 'morgan';
// import { stream } from '../../config/winston';
import cors from 'cors';
import * as Todo from './controller/Todo/itemControll';
import router from './controller/Todo';
// import bodyParser from 'body-parser';

const app = express();

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

const initData = async (): Promise<void> => {
  try {
    await createConnection();
    console.log('database connected!');
  } catch (error) {
    console.error(error);
  }
};

initData();

app.use('/api', router);

export default app;
