import React from 'react';
import styled from 'styled-components';

const CenterStyles = styled.div`
	display: grid;
	height: calc(80vh - var(--three-spaces));
	text-align: center;

	div.center-inner {
		margin: auto;
	}
`;

const Center: React.FC = ({ children }) => <CenterStyles><div className="center-inner">{children}</div></CenterStyles>;

export default Center;