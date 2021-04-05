import { Router } from 'express';
import { byCalories, byName, createMeals, getMeals } from './controllers/MealsController';

const routes = Router();

routes.get('/meals', getMeals);
routes.post('/meals', createMeals);

routes.get('/meals/:calories', byCalories);
routes.get('/meals/title/:name', byName);
export default routes;
