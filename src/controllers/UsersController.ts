import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Meal_Users } from '../entity/Users';

export const getUser = async(req: Request, res: Response) => {
  const user = await getRepository(Meal_Users).find();

  return res.json(user);
}

export const createUser = async(req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getRepository(Meal_Users).save({ email, password }).then(() => {
    console.log('success!')
  }).catch(err => console.log(err))
  
  return res.json(user);
}
