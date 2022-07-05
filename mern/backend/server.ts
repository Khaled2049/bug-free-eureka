import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { urlencoded } from 'body-parser';
// import { errorHandler } from './middleware/errorMiddleware';
import { connectDB } from '../backend/config/db';

import userRoutes from './routes/userRoutes';
import skillRoutes from './routes/skillRoutes';

dotenv.config();
connectDB();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use('/skills', skillRoutes);
app.use('/users', userRoutes);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
