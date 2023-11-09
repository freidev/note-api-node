import express, { Request, Response } from 'express';
import { router } from './routes/notes';

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello, World! from express');
});

app.use('/api/notes', router);

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
