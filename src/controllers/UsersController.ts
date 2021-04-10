import { Equal, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Users } from '../entity/Users';

import * as bcrypt from 'bcrypt';

const salt = 10;

export const getUsers = async (req: Request, res: Response) => {
  const user = await getRepository(Users).find();

  return res.json({ user });
}

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const hash = bcrypt.hashSync(password, salt);

  const account = await getRepository(Users).find({
    email: email
  }); //pegando o email

  account.map(async (user) => {
    console.log(user.email)

    if (!user.email) { //se nao existir eu crio
      const user = await getRepository(Users).save({ email, password: hash }).then(() => {
        console.log('success!')
      }).catch(err => console.log(err));

      return res.json(user);
    }
    return res.status(409).json({ msg: 'This email already exist!' });
  });

  return res.json({ msg: 'aa' })
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getRepository(Users).find({
    where: { email: Equal(email) }
  }).then(data => {
    data.map(user => {
      const hash = bcrypt.compareSync(password, user.password)

      console.log(hash);
      if (hash !== false) {
        const accountPassword = getRepository(Users).find({
          where: { email: Equal(email), password: user.password }
        })

        return res.status(200).json({ msg: 'Success! Logged' })
      } else {
        return res.status(401).json({ msg: 'Wrong password!' });
      }

    })
  })

  return res.json(user);
}