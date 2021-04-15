import { Equal, getRepository, LessThanOrEqual, Like, MoreThanOrEqual } from 'typeorm';
import { Request, Response } from 'express';
import { Meals } from '../entity/Meals';

export const getMeals = async (req: Request, res: Response) => {
  const meals = await getRepository(Meals).find({
    relations: ['users']
  });

  return res.json(meals);
}

export const createMeals = async (req: Request, res: Response) => {
  // const userID = await getRepository(Users).find()

  const { title, breakfast, lunch, snack, dinner, total_calories, breakfast_time, lunch_time, snack_time, dinner_time, users } = req.body;

  const meals = await getRepository(Meals).save({
    title,
    breakfast,
    lunch,
    snack,
    dinner,
    total_calories,
    breakfast_time,
    lunch_time,
    snack_time,
    dinner_time,
    users
  }).then(() => {
    console.log('success!')
  }).catch(err => console.log(err)) //When you get a connect error, probaby its because aready have a values like 'string" for example
  //and you want to create the same item as varchar

  return res.json({ meals });
}

export const rateMeal = async (req: Request, res: Response) => {
  const rate = await getRepository(Meals).find()

  return res.json(rate);
}

export const byId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const meal = await getRepository(Meals).findOne({
    where: { id: id }
  }).then(data => {
    return res.json(data);
  }).catch(err => {
    return res.json({ msg: 'There was an error!' });
  })
}

export const byCalories = async (req: Request, res: Response) => {
  const { option } = req.params;

  if (option === 'asc') {
    const meal_calories = await getRepository(Meals).find({
      order: {
        total_calories: 'ASC'
      }
    });

    return res.json({ meal_calories });

  } else if (option === 'desc') {
    const meal_calories = await getRepository(Meals).find({
      order: {
        total_calories: 'DESC'
      }
    });

    return res.json({ meal_calories });
  } else {
    return res.json({ msg: 'Invalod - ' + option })
  }

}

// FIlter by name
export const byName = async (req: Request, res: Response) => {
  const { name } = req.params;

  const meal_name = await await getRepository(Meals).find({ title: Like(`%${name}%`) });

  return res.json(meal_name);
}

export const likes = async (req: Request, res: Response) => {
  const { id } = req.params;

  const meal = await getRepository(Meals).findOne({
    where: { id: id }
  }).then(async (data) => {
    await getRepository(Meals).update(id, { rated: data.rated + 1 }).then(updated_data => {
     return res.json({ msg: 'Liked <3' });
    })
  }).catch(err => {
    return res.json({ msg: 'There was an error!' });
  })
}
