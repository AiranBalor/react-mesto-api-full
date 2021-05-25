const express = require('express');
const { errors } = require('celebrate');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { requestLogger, errorLogger } = require('./middlewares/logger');

dotenv.config();
const { PORT = 3000 } = process.env;

const app = express();
app.disable('x-powered-by');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const {
  validateSignUp,
  validateSignIn,
} = require('./middlewares/validation');
const mainErrorsHandler = require('./middlewares/mainErrorsHandler');
const NotFoundError = require('./errors/NotFoundError');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: 'Слишком много запросов к серверу, пожалуйста, подождите 15 минут',
});

app.use(cors({
  origin: true,
  credentials: true,
  exposedHeaders: '*',
}));

app.use(express.json());
app.use(helmet());
app.use(requestLogger);

app.use(limiter);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signin', validateSignIn, login);
app.post('/signup', validateSignUp, createUser);

app.use('/users', auth, usersRouter);
app.use('/cards', auth, cardsRouter);

app.all('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use(errorLogger);

app.use(errors());

app.use(mainErrorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
