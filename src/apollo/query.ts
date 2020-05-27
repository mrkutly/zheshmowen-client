import { gql } from '@apollo/client';
import { User, Group } from './types';

export const CURRENT_USER_QUERY = gql`
	query {
		me {
			email
			name 
			photoUrl
			affiliation
		}
	}
`;


export interface CurrentUserData {
	me: User;
};

export const SEARCH_GROUPS_QUERY = gql`
	query SearchGroups($name: String!) {
		groupsWhere(name: $name) {
			name
			slug
			id
		}
	}
`;

export interface SearchGroupsData {
	groupsWhere: Group[];
};


export const GROUP_QUERY = gql`
	query Group($slug: String!) {
		groupWhere(slug: $slug) {
			name
			slug
			id
			currentUserStatus {
				isAdmin
				isBanned
				isPending
			}
			posts {
				body 
				numLikes
				id
				user {
					id
					name 
					photoUrl
				}
				comments {
					id
					numLikes
					body 
					user {
						id
						name 
						photoUrl
					}
				}
			}
			groupUsers {
				id
				isBanned
				isAdmin
				isPending
				user {
					name
					id
					photoUrl
				}
			}
		}
	}
`;

export interface GroupData {
	groupWhere: Group;
}