import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// public
import userRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRoutes.js';
import messageRouter from './routes/messageRoutes.js';

const app = express();

// GLOBAL MIDDLEWARES
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            "http://localhost:5173",
            "http://localhost:4173",
            "http://portfoliobyvivek.online",
            "https://portfoliobyvivek.online",
            "http://www.portfoliobyvivek.online",
            "https://www.portfoliobyvivek.online",
        ];
        const isAllowed = allowedOrigins.includes(origin);
        callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(mongoSanitize());


// ROUTES
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/message", messageRouter);

// NOT FOUND MIDDLEWARE
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// ERROR MIDDLEWARE
// app.use(errorHandlerMiddleware);

// SERVER AND DB CONNECTION
const port = process.env.PORT || 5300;
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB connected successfully");
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
} catch (error) {
    console.log(error)
    process.exit(1);
}