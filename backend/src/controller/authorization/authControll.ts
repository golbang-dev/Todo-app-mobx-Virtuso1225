import { RequestHandler } from 'express';
import User from '../../entity/User';

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { userId, userPassword } = req.body;
    const user = await User.findOne({ where: { userId } });
    if (user && user.userPassword === userPassword) {
      res.status(200).end();
    } else {
      throw user ? new Error('Wrong Password') : new Error('Invalid Id');
    }
  } catch (error) {
    next(error);
  }
};

export const register: RequestHandler = async (req, res, next) => {
  try {
    const { userId, userPassword } = req.body;
    const user = await User.findOne({ where: { userId } });
    if (user) {
      throw new Error('Existing Id');
    }

    const newUser = new User();
    newUser.userId = userId;
    newUser.userPassword = userPassword;
    await User.save(newUser);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
};
