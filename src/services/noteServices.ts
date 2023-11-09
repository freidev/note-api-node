import noteData from '../data/noteData.json';
import { NewNote, Note } from '../types/note';

const notes: Note[] = noteData;
export const getNotes = () => notes;

export const addNote = (note: NewNote) => {
	const newNote: Note = {
		id: notes.length + 1,
		createdAt: new Date().toISOString(),
		...note,
		updatedAt: new Date().toISOString(),
		category: {
			id: 1,
			name: 'Category 1',
		},
	};

	notes.push(newNote);
};

export const deleteNote = (id: number): boolean => {
	const index = notes.findIndex((note) => note.id === id);
	if (index !== -1) {
		notes.splice(index, 1);
		return true;
	}
	return false;
};

export const updateNote = (id: number, content: string, title: string) => {
	const index = notes.findIndex((note) => note.id === id);
	if (index !== -1) {
		notes[index].content = content;
		notes[index].title = title;
		notes[index].updatedAt = new Date().toISOString();
		return true;
	}
	return false;
};

export const getNoteById = (id: number): Note | undefined => {
	const note = notes.find((note) => note.id === id);
	return note;
};

// export const updateNote = (id: number, note: string) => null
