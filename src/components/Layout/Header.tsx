import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import UserLinks from './UserLinks';
import User from '../lib/User';
import GroupSearch from '../lib/GroupSearch';

interface HeaderProps {
	siteTitle: String;
}

const HeaderStyles = styled.header`
	position: sticky;
	top: 0;
	background: white;
	z-index: 10;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: var(--one-space);
	margin-bottom: var(--two-spaces);

	* {
		margin: 0 var(--one-space);
	}

	img {
		margin-bottom: 0;
	}

	h2 {
		margin-right: auto;

		a {
			color: var(--primary);
			text-decoration: none;
		}
	}
`;

const Header = ({ siteTitle }: HeaderProps) => (
	<User>
		{({ data, loading }) => {
			const me = data?.me;

			return (
				<HeaderStyles>
					<h2>
						<Link to="/">Zheshmowen</Link>
					</h2>
					{/* <div style={{ width: 'auto' }}> */}
					<GroupSearch />
					<div>
						{!loading && me ? <UserLinks me={me} /> : null}
						{!loading && !me ? <a href="http://localhost:4000/auth/auth0">Login or Signup</a> : null}
					</div>
					{/* </div> */}
				</HeaderStyles>
			);
		}}
	</User >
);

export default Header;
