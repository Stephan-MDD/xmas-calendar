import React, { useState } from 'react';

// libraries
import styled, { css } from 'styled-components';

// scripts
import * as styles from '../../scripts/styles';

const Hatch = ({ content }) => {
	const [opened, setOpened] = useState(false);

	const handleClick = () => {
		console.log(content);
		setOpened(true);
	};

	return (
		<StyledContainer onClick={handleClick} opened={opened} color={content.color} background={content.background}>
			<div className="Content">
				<a href="#">{content.message}</a>
			</div>

			<div className="Hatch">
				<h2>{content.day}</h2>
			</div>
		</StyledContainer>
	);
};

export default Hatch;

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	position: relative;

	box-shadow: inset 0.1rem 0.1rem 0.8rem #999;

	font-size: 1.6rem;

	.Hatch {
		position: absolute;

		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
		transition: all 500ms ease-in;

		transform-origin: 100% 0%;

		${({ color, background }) => css`
            color ${color};
            background ${background};
        `}
	}

	${({ opened }) =>
		opened &&
		css`
			perspective: 40em;
			.Hatch {
				transform: rotateY(75deg);
			}
		`}
`;
