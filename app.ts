import cors from 'cors';
import express from 'express';
import router from './src/routes/index';
import requestLogger from './src/middlewares/logger';
import { globalErrorHandler } from './src/middlewares/errorHandler';

const app = express();

// CORS Configuration for Development and Production
const corsOptions = {
    origin: '*',  // wildcard in development
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],  // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
    credentials: true,  // Allow cookies or credentials
};

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/api', router);
app.use('/test', (req, res) => {
    res.status(200).json({ message: 'Server is running!!!' });
})
app.use(globalErrorHandler);

export default app;
// This file is responsible for setting up the Express application.
// It imports the necessary modules, sets up middleware, and defines the base route for the API.