import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/MiddleWares/globalerrorhandler';
import router from './app/routes';
import notFound from './app/MiddleWares/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();

//parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Server is live');
});

// application routes
app.use('/api', router);

//global error handler
app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
