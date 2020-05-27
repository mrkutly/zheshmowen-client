import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	connectToDevTools: true,
	link: new HttpLink({
		uri: 'http://localhost:4000/graphql',
		fetch,
		credentials: 'include'
	})
});