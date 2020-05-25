import { gql } from '@apollo/client';
import { User } from './types';

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
}