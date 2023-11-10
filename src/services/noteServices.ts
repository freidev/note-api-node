import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// import noteData from '../data/noteData.json';
import { NewNote, Note } from '../types/note';

export const getNotes = async () => {
	try {
		const db = firebase.firestore();
		const notes: Note[] = [];
		const snapshot = await db
			.collection('notes')
			.where('deleted', '==', false)
			.get();
		snapshot.forEach((doc) => {
			const note = doc.data() as Note;
			notes.push(note);
		});
		return notes;
	} catch (error) {
		throw `${error}`;
	}
};

export const addNote = async (note: NewNote) => {
	const newNote: Note = {
		id: '',
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		category: {
			id: 1,
			name: 'Category 1',
		},
		...note,
		deleted: false,
	};
	try {
		const db = firebase.firestore();
		const doc = await db.collection('notes').add(newNote);
		await doc.update({ id: doc.id });
	} catch (error) {
		throw `${error}`;
	}
};

export const deleteNote = async (id: string) => {
	try {
		const db = firebase.firestore();
		await db
			.collection('notes')
			.doc(id)
			.update({ deleted: true, updatedAt: new Date().toISOString() });
	} catch (error) {
		console.log(error);
		throw `${error}`;
	}
};

export const updateNote = async (
	id: string,
	content: string,
	title: string,
) => {
	const db = firebase.firestore();
	await db.collection('notes').doc(id).update({
		content,
		title,
		updatedAt: new Date().toISOString(),
	});
};

export const getNoteById = async (id: string): Promise<Note | undefined> => {
	const db = firebase.firestore();
	const note = db.collection('notes').doc(id);
	return note.get().then((doc) => {
		if (doc.exists) return doc.data() as Note;
		return undefined;
	});
};

// // export const updateNote = (id: number, note: string) => null
