import React from "react";
import styled from 'styled-components';
import UserLinks from './UserLinks';
import User from '../User';

interface HeaderProps {
	siteTitle: String;
}

const HeaderStyles = styled.header`
	display: flex;
	justify-content: flex-end;
	height: var(--three-spaces);
	padding: var(--one-space);
	margin-bottom: var(--two-spaces);

	* {
		margin: 0 var(--one-space);
	}

	img {
		margin-bottom: 0;
	}
`;

const Header = ({ siteTitle }: HeaderProps) => (
	<User>
		{({ data, loading }) => {
			const me = data?.me;

			return (
				<HeaderStyles>
					<div className="right">
						{!loading && me ? <UserLinks me={me} /> : null}
						{!loading && !me ? <a href="http://localhost:4000/auth/auth0">Login or Signup</a> : null}
					</div>
				</HeaderStyles>
			);
		}}
	</User >
);

export default Header;
