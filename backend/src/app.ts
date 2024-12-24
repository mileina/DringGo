import bodyParser from 'body-parser';
import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();

// Middlewares globaux
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Définir les routes
app.use('/api', routes);

export default app;
