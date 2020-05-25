import React from 'react';

interface ErrProps {
	error: Error;
}

const Err = ({ error }: ErrProps) => <p>{error.message}</p>;

export default Err;