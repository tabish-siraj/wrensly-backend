import cors from 'cors';
import express from 'express';
import router from './src/routes/index';
import requestLogger from './src/middlewares/logger';
import { globalErrorHandler } from './src/middlewares/errorHandler';

const app = express();

// CORS Configuration for Development and Production
const allowedOrigins = [
    "http://localhost:3000",              // local dev
    "https://wrensly-frontend.vercel.app" // prod frontend
];

const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // handle preflight requests ✅
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