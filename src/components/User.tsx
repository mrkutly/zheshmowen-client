import React, { ReactNode } from 'react';
import { useQuery, QueryResult } from '@apollo/client';
import { CURRENT_USER_QUERY, CurrentUserData } from '../apollo/query';;

interface UserProps {
	children: React.FC<QueryResult<CurrentUserData>>;
}

const User = ({ children }: UserProps) => {
	const payload = useQuery<CurrentUserData>(CURRENT_USER_QUERY);

	return children(payload);
};

export default User;