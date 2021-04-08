import { Router } from 'express';
import { byCalories, byName, createMeals, getMeals } from './controllers/MealsController';
import { getUser } from './controllers/UsersController';

const routes = Router();

routes.get('/meals', getMeals);
routes.post('/meals', createMeals);

routes.get('/meals/:calories', byCalories);
routes.get('/meals/title/:name', byName);

routes.get('/users', getUser);
routes.post('/user', createMeals);

export default routes;
