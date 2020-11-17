// Import dependencies
import express, { Application, Request, Response } from 'express';
import {connect} from 'mongoose';
import bodyParser from 'body-parser';
require('dotenv').config();

// Import routes
import UserRoutes from './routes/userRoutes';

const app: Application = express();

// Config DB
const url: string = process.env.MONGO_URI || "mongodb://localhost:27017/ts-express-app"
connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', UserRoutes)

// Listen for port
app.listen(5000, () => console.log('Server running at port 5000'));