import Routes from './routes/index';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app: Application = express();

// Express Middlewares
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json());

// Root Route
app.get('/', (req: Request, res: Response) => {
	res.status(200).json({ message: '<h1>{TS-NODE-EXPRESS}</h1>' });
});

// Server Health Check
app.get('/health-check', (req: Request, res: Response) => {
	res.status(200).json({ message: 'Server is up and running!' });
});

app.use('/api', Routes);

export default app;
