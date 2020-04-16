import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { Response, logger, getEnv } from './utils';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 6000;

dotenv.config();

app.get('/', (req, res) => {
  res.send('Welcome to <%= projectName %>"');
});


app.all('*', (req, res) => {
  Response(res, { status: 404, message: 'This route does not exist yet!' });
});

app.listen(port, () => {
  logger(`Server Running at:
  http://localhost:${getEnv('PORT', port)}`);
});

export default app;