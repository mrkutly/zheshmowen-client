import { gql } from '@apollo/client';

export const REQUEST_TO_JOIN_MUTATION = gql`
	mutation JoinGroup($groupId: ID!) {
    joinGroup(groupId: $groupId) {
      isPending
    }
  }
`;

export interface RequestToJoinData {
	joinGroup: {
		isPending: boolean;
	};
}