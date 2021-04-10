import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Users } from '../entity/Users';

export const getUsers = async(req: Request, res: Response) => {
  const user = await getRepository(Users).find();

  return res.json({ user });
}

export const register = async(req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getRepository(Users).save({ email, password }).then(() => {
    console.log('success!')
  }).catch(err => console.log(err))
  
  return res.json(user);
}

// export const login = async(req: Request, res: Response) => {

// }