import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { urlencoded } from 'body-parser';
import { errorHandler} from './middleware/errorMiddleware'
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const skillRoutes = require('./routes/skillRoutes')

app.use(express.json())
app.use(urlencoded({ extended: false}))
app.use('/skills', skillRoutes)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});