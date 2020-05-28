import React from 'react';
import { useMutation } from '@apollo/client';
import { REQUEST_TO_JOIN_MUTATION, RequestToJoinData } from '../../apollo/mutation';
import { UserStatus } from '../../apollo/types';

interface RequestToJoinProps {
	groupId: number;
	userStatus: UserStatus | null;
}

const RequestToJoin = ({ groupId, userStatus }: RequestToJoinProps) => {
	const [join, { data, error, loading }] = useMutation<RequestToJoinData>(REQUEST_TO_JOIN_MUTATION, {
		variables: {
			groupId
		}
	});

	if (error) return <span>There was a problem joining this group.</span>;
	if (loading) return <span>...</span>;
	if (userStatus?.isPending) return <span>Your request to join has been submitted to this groups admins.</span>;
	if (data?.joinGroup.isPending) return <span>Success! Your request to join has been submitted to this groups admins.</span>;
	if (!userStatus) return <button type="button" onClick={() => join()}>Request to join</button>;
	return null;
};

export default RequestToJoin;


