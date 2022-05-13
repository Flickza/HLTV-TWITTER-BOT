import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import twitterRoutes from './routes/twitterRoutes.js';

import hltvRoutes from './routes/hltvRoutes.js';

const app = express();


app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.use('/api/twitter', twitterRoutes)
app.use('/api/hltv', hltvRoutes)

const PORT = process.env.PORT || 5000;

try {
  app.listen(PORT, () => { console.log(`server running on port ${PORT}`) });
} catch (error) {
  console.log(error);
}
