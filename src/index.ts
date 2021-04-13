import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as session from "express-session";

import routes from "./routes";
import { createConnection } from "typeorm";

const app = express();

createConnection()
app.use(cors());
app.use(session({
  secret: 'yhse-jgfr-ssdf',
  resave: true,
  cookie: { maxAge: 60 * 60 * 2 },
  saveUninitialized: true,
}))
app.use(bodyParser.json())
app.use(routes);

app.listen(5500, () => console.log('Running 🚀'));
