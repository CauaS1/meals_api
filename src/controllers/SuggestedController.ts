import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Suggested } from '../entity/Suggested';

export const getSuggestedMeals = async (req: Request, res: Response) => {
  const meals = await getRepository(Suggested).find();
  return res.json({ meals });
}