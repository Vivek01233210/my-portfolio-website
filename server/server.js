// import 'express-async-errors';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// public
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import userRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRoutes.js';
import { protect } from './middlewares/protect.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const filePath = path.join(__dirname, './ProjectDetails.json');

// GLOBAL MIDDLEWARES
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            "http://localhost:5173",
            "http://localhost:4173",
            "http://portfoliobyvivek.online",
            "http://www.portfoliobyvivek.online",
            "https://www.portfoliobyvivek.online",
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
    res.send('Hello World');
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/projects", projectRouter);

// get all projects
app.get('/api/v1/projects', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file' });
        }
        try {
            const jsonObject = JSON.parse(data);
            // console.log(jsonObject)
            res.json(jsonObject);
        } catch (parseErr) {
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
});

// get a project
app.get('/api/v1/projects/:slug', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file' });
        }
        try {
            const jsonObject = JSON.parse(data);
            const project = jsonObject.projects.find(project => project.slug === req.params.slug);
            if (!project) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json(project);
        } catch (parseErr) {
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
});

// update a project
app.put('/api/v1/edit-projects/:slug', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file' });
        }
        try {
            const jsonObject = JSON.parse(data);
            const projectIndex = jsonObject.projects.findIndex(project => project.slug === req.params.slug);
            if (projectIndex === -1) {
                return res.status(404).json({ error: 'Project not found' });
            }

            jsonObject.projects[projectIndex] = req.body.project;

            fs.writeFile(filePath, JSON.stringify(jsonObject, null, 2), (writeErr) => {
                if (writeErr) {
                    return res.status(500).json({ error: 'Error writing the file' });
                }
                res.status(200).json({ message: 'Project updated' });
            });
        } catch (parseErr) {
            res.status(500).json({ error: 'Error parsing JSON' });
            console.log(parseErr)
        }
    });
});


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