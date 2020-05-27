import styled from 'styled-components';

export const CardStyles = styled.div`
	display: grid;
	grid-gap: var(--one-space);
	padding: var(--one-space);
	border: 3px solid var(--accent);
	border-radius: 5px;
	margin-bottom: calc(2 * var(--three-spaces));

	&.comment {
		border: 1px solid var(--accent);
		margin: var(--one-space) 0;
	}
`;