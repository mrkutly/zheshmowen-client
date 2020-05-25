import { gql } from '@apollo/client';
import { User, Group } from './types';

export const CURRENT_USER_QUERY = gql`
	query {
		me {
			email
			name 
			photo_url
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
			id
		}
	}
`;

export interface SearchGroupsData {
	groupsWhere: Group[];
};
