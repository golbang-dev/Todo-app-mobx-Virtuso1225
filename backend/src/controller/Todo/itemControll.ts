import { RequestHandler } from 'express';
import { getManager, getRepository } from 'typeorm';
import TodoItem from '../../entity/TodoItem';

export const getTodoList: RequestHandler = async (req, res, next) => {
  try {
    const target = await getManager()
      .createQueryBuilder()
      .select('todo')
      .from(TodoItem, 'todo')
      .getMany();
    res.json(target);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
};

export const writePost: RequestHandler = async (req, res, next) => {
  try {
    const { content } = req.body;
    // const user = await entityManager.findOne(User);
    const todoItem = new TodoItem();
    todoItem.TodoContent = content;
    todoItem.checked = false;
    await TodoItem.save(todoItem);

    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
};

export const fixPost: RequestHandler = async (req, res, next) => {
  try {
    const { content, id } = req.params;
    const target = await TodoItem.findOne({ where: id });
    target.TodoContent = content;
    target.save();

    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
};

export const toggleItem: RequestHandler = async (req, res, next) => {
  try {
    const userRepository = getRepository(TodoItem);
    const { index } = req.body;
    console.log(index);
    const target = await TodoItem.findOne({ where: index });
    target.checked = !target.checked;
    target.save();
    return res
      .status(200)
      .json({ index: index, checked: target.checked })
      .end();
  } catch (error) {
    return next(error);
  }
};

export const removeItem: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log(id);
    const target = await TodoItem.findOne({ where: id });
    await TodoItem.remove(target);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
};
