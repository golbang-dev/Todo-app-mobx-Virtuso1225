import express from 'express';
import { createConnection, getManager } from 'typeorm';
import morgan from 'morgan';
import { stream } from '../../config/winston';
import cors from 'cors';
import bodyparser from 'body-parser';
import TodoItem from './entity/TodoItem';
import * as Todo from './controller/Todo/itemControll';

const app = express();

app.use(cors);
app.use(bodyparser.json);
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

const initData = async (): Promise<void> => {
  try {
    await createConnection();
    console.log('database connected!');
    const target = await getManager()
      .createQueryBuilder()
      .select('todo')
      .from(TodoItem, 'todo')
      .getMany();
    console.log(target);
  } catch (error) {
    console.error(error);
  }
};

initData();

app.get('/getlist', Todo.getTodoList);

export default app;
