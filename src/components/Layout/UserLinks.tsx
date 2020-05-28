import React from 'react';
import { Link } from "gatsby";
import { AiOutlineBell } from 'react-icons/ai';
import { User } from '../../apollo/types';

interface UserLinkProps {
	me: User;
}

const UserLinks = ({ me }: UserLinkProps) => (
	<>
		<Link to="/notifications">
			<AiOutlineBell size="40px" />
		</Link>
		<Link to="/settings">
			<img src={me.photoUrl} width="40" style={{ borderRadius: "100%" }} alt="your profile picture" />
		</Link>
		<a href="http://localhost:4000/auth/logout">Logout</a>
	</>
);


export default UserLinks;