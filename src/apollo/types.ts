export interface User {
	email: string;
	name: string;
	photoUrl: string;
	affiliation: string;
};

export interface Group {
	name: string;
	slug: string;
	id: number;
	posts: Post[];
	groupUsers: User[];
}

export interface Post {
	body: string;
	id: number;
	numLikes: number;
	user: User;
	comments: Comment[];
}

export interface Comment {
	numLikes: number;
	body: string;
	user: User;
}