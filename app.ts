import cors from 'cors';
import express from 'express';
import router from './src/routes/index';
import requestLogger from './src/middlewares/logger';
import { globalErrorHandler } from './src/middlewares/errorHandler';

const app = express();

// CORS Configuration
const corsOptions = {
    origin: ["http://localhost:3000", "https://wrensly-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // handle preflight requests

app.use(express.json());
app.use(requestLogger);
app.use('/api', router);
app.use('/test', (req, res) => {
    res.status(200).json({ message: 'Server is running!!!' });
});
app.use(globalErrorHandler);

export default app;
