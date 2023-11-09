export type category = {
	id: number;
	name: string;
};

export interface Note {
	id: number;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	category: category;
}

export type NewNote = Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
