import { Router } from 'express';
import { Like } from 'typeorm';
import { byCalories, byId, byName, createMeals, getMeals, likes } from './controllers/MealsController';
import { register, getUsers, login } from './controllers/UsersController';

const routes = Router();

routes.get('/meals', getMeals);
routes.post('/meals', createMeals);

routes.get('/meal/:id', byId);
routes.get('/meals/calories/:option', byCalories);
routes.get('/meals/title/:name', byName);
routes.put('/meal/likes/:id', likes);


routes.get('/users', getUsers);
routes.post('/register', register);
routes.post('/login', login);


export default routes;
