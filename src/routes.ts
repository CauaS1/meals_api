import { Router } from 'express';
import { byCalories, byName, check, createMeals, getMeals } from './controllers/MealsController';
import { register, getUsers, login, logout } from './controllers/UsersController';

const routes = Router();

routes.get('/meals', getMeals);
routes.post('/meals', createMeals);

routes.get('/meals/calories/:option', byCalories);
routes.get('/meals/title/:name', byName);
routes.get('/check', check);


routes.get('/users', getUsers);
routes.post('/register', register);
routes.post('/login', login);
routes.get('/logout', logout);


export default routes;
