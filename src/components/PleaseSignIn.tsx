import React, { ReactNode, ReactNodeArray } from 'react';
import { useQuery } from "@apollo/client";
import Loading from './Loading';
import Err from './Err';
import { CURRENT_USER_QUERY, CurrentUserData } from '../apollo/query';

const PleaseSignIn: React.FC = ({ children }) => {
	const { data, error, loading } = useQuery<CurrentUserData>(CURRENT_USER_QUERY);
	console.log(data);
	if (loading) return <Loading />;
	if (error) return <Err error={error} />;
	if (!data.me) return <p>Please sign in before continuing.</p>;
	return <>{children}</>;
};

export default PleaseSignIn;