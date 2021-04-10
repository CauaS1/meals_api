import { Router } from 'express';
import { byCalories, byName, createMeals, getMeals } from './controllers/MealsController';
import { register, getUsers } from './controllers/UsersController';

const routes = Router();

routes.get('/meals', getMeals);
routes.post('/meals', createMeals);

routes.get('/meals/calories/:option', byCalories);
routes.get('/meals/title/:name', byName);

routes.get('/users', getUsers);
routes.post('/register', register);

export default routes;
