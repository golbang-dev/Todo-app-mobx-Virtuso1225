import express from "express";
import { createConnection } from "typeorm";
import morgan from "morgan";
// import { stream } from '../../config/winston';
import cors from "cors";
import * as Todo from "./controller/Todo/itemControll";
import router from "./controller/Todo";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));
app.use(express.static("public"));

const initData = async (): Promise<void> => {
  try {
    await createConnection();
    console.log("database connected!");
  } catch (error) {
    console.error(error);
  }
};

initData();

app.use("/api/todo", router);

export default app;
