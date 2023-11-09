import express from 'express';
import * as service from '../services/noteServices';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send(service.getNotes());
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

router.get('/:id', (req, res) => {
	const id = Number(req.params.id);
	const note = service.getNoteById(id);
	if (!note) {
		res.status(404).send({ message: 'Note not found' });
		return;
	}
	res.send(note);
});

router.put('/:id', (req, res) => {
	const id = Number(req.params.id);
	const { title, content } = req.body;
	const updated = service.updateNote(id, content, title);
	if (!updated) {
		res.status(404).send({ message: 'Note not found' });
		return;
	}
	res.send({ message: 'Note updated' });
});

router.delete('/:id', (req, res) => {
	const id = Number(req.params.id);
	const deleted = service.deleteNote(id);
	if (!deleted) {
		res.status(404).send({ message: 'Note not found' });
		return;
	}
	res.status(204).send({ message: 'Note deleted' });
});

export { router };
