import express from 'express';
import routes from './routes/providers.route';
import { db } from './database/sequelize/config';

db.sync({ force: false });

export const app = express();

const PORT = 8000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use(express.json({ type: '*/*' }));

app.use('/api/v1', routes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[server] is running at https://localhost:${PORT}`);
  });
}
