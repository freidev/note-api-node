export type category = {
	id: number;
	name: string;
};

export interface Note {
	id: string;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	category: category;
	deleted: boolean;
}

export type NewNote = Pick<Note, 'title' | 'content'>;
