import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 5001;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.send({ message: 'hello' });
});

app.listen(PORT, () => {
  console.log(`${PORT}번 listen!`);
});
