import express from 'express';
import * as service from '../services/noteServices';

const router = express.Router();

router.get('/', async (_req, res) => {
	const notes = await service.getNotes();
	res.send(notes);
});

router.post('/', (req, res) => {
	const { title, content } = req.body;
	if (!title || !content) {
		res.status(400).send({ message: 'Title and content are required' });
		return;
	}
	const createdNote = service.addNote({ title, content });
	res.status(201).send(createdNote);
});

router.get('/:id', async (req, res) => {
	const id = req.params.id;
	const note = await service.getNoteById(id);
	if (!note) {
		res.status(404).send({ message: 'Note not found' });
		return;
	}
	res.send(note);
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const { title, content } = req.body;
	if (!title && !content) {
		res.status(400).send({ message: 'Title or content is required' });
	}
	service
		.updateNote(id, content, title)
		.then(() => {
			res.send({ message: 'Note updated' });
		})
		.catch((error) => {
			res.status(404).send({ message: error });
		});
});

router.delete('/:id', async (req, res) => {
	const id = req.params.id;
	try {
		await service.deleteNote(id);
		res.status(204).send({ message: 'Note deleted' });
	} catch (error) {
		res.status(404).send({ message: error });
	}
});

export { router };
