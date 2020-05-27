import React from 'react';
import DefaultPhoto from './DefaultPhoto';

interface UserPhotoProps {
	photoUrl?: string;
}

const UserPhoto = ({ photoUrl }: UserPhotoProps) => {
	if (!photoUrl) return <DefaultPhoto />;
	return <img src={photoUrl} alt={name} width="30px" />;
};

export default UserPhoto;