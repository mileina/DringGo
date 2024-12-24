import bodyParser from 'body-parser';
import express, { Application } from 'express';
import cors from './config/cors';
import routes from './routes';

const app: Application = express();

// Middlewares globaux
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

// Définir les routes
app.use('/api', routes);

export default app;
