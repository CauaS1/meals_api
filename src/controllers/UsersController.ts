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
  const { email, password, name } = req.body;

  const hash = bcrypt.hashSync(password, salt);

  const account = await getRepository(Users).find({
    email: email
  });

  if (account.length === 0) {
    const user = await getRepository(Users).save({
      email: email,
      password: hash,
      name: name,
      photo: 'not setted'
    })

    return res.status(200).json(user);
  }

  return res.status(409).json({ msg: 'Invalid email! Tihs email already exist'! })
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
        }).then(data => {
          console.log(data);
        }).catch(err => console.log(err));

        req.session.user = { // Becareful, the order matter, it wasn't working because its was, id, email, name and photo
          id: user.id,
          name: user.name,
          email: user.email,
          photo: user.photo,
        };

        return res.status(200).json({ msg: 'Success! Logged' })
      } else {
        return res.status(401).json({ msg: 'Wrong password!' });
      }
    })
    return res.status(404).json({ msg: 'something went wrong!' });
  })
}

export const editPhoto = async (req: Request, res: Response) => {
  const { photo } = req.body;

  if (req.session.user !== undefined) {
    const userId = req.session.user.id;

    const user = await getRepository(Users).findOne({
      where: { id: Equal(userId) }
    }).then(async () => {
      await getRepository(Users).update(userId, {
        photo: photo
      });
    });

    return res.json(user);
  }

  return res.json({ msg: 'user not founded!' })
}


export const check = async (req: Request, res: Response) => {
  if (req.session.user !== undefined) {
    return res.json(req.session.user)
  }

  return res.status(404).json({ msg: 'The user wasn\'t found!' });
}
