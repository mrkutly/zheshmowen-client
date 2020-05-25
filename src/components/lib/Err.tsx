import React from 'react';
import Center from '../styles/Center';

interface ErrProps {
	error: Error;
}

const Err = ({ error }: ErrProps) => <Center><p>{error.message}</p></Center>;

export default Err;