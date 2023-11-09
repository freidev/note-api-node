import express, { Request, Response } from 'express';
import { router } from './routes/notes';

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (_req: Request, res: Response) => {
	res.sendFile('client/index.html', { root: __dirname });
});

app.use('/api/notes', router);

app.use((req, res) => {
	res.status(404).send({ message: `route {{${req.path}}} not found` });
});

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
