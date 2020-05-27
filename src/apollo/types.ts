export interface User {
	id: number;
	email: string;
	name: string;
	photoUrl: string;
	affiliation: string;
};

export interface GroupUser extends UserStatus {
	id: number;
	user: User;
}

export interface Group {
	name: string;
	slug: string;
	id: number;
	posts: Post[];
	groupUsers: GroupUser[];
	currentUserStatus: UserStatus;
}

export interface Post {
	body: string;
	id: number;
	numLikes: number;
	user: User;
	comments: Comment[];
}

export interface Comment {
	id: number;
	numLikes: number;
	body: string;
	user: User;
}

export interface UserStatus {
	isAdmin: boolean;
	isBanned: boolean;
	isPending: boolean;
}