"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import dependencies
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
// Import routes
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = express_1.default();
// Config DB
const url = process.env.MONGO_URI || "mongodb://localhost:27017/ts-express-app";
mongoose_1.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use('/', userRoutes_1.default);
// Listen for port
app.listen(5000, () => console.log('Server running at port 5000'));
