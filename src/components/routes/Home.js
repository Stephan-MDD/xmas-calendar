import React from 'react';

// libraries
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

// components
import Hatch from '../elements/Hatch';

// scripts
import { hatches, cards } from '../../scripts/context';
import * as styles from '../../scripts/styles';

const Home = () => {
	const isSmallMedia = useMediaQuery(styles.mediaBounds.small);

	return (
		<StyledContainer isSmallMedia={isSmallMedia}>
			<h1>Lorem Ipsum</h1>

			<div className="Hatches">
				{Object.entries(hatches).map(([day, hatch]) => (
					<Hatch key={day} content={{ ...hatch, day }} />
				))}

				{Object.entries(cards).map(([key, card]) => (
					<Message content={card} key={key} />
				))}
			</div>
		</StyledContainer>
	);
};

const Message = ({ content }) => {
	return (
		<div className={content.class}>
			<p>{content.message}</p>
		</div>
	);
};

export default Home;

const StyledContainer = styled.div`
	h1 {
		color: ${styles.colors.green.dark};
	}

	.Hatches {
		box-shadow: 0 0 1rem #999;
		border-radius: 0.8rem;
	}

	.large-card {
		display: flex;
		justify-content: center;
		align-items: center;

		color: ${styles.colors.green.dark};
		background: ${styles.colors.white.off};
		padding: 1rem;
	}

	.small-card {
		display: flex;
		justify-content: center;
		align-items: center;

		color: ${styles.colors.green.dark};
		background: ${styles.colors.white.off};
		padding: 1rem;
	}

	${({ isSmallMedia }) => (isSmallMedia ? smallMedia : largeMedia)}
`;

const largeMedia = css`
	.Hatches {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(5, 5rem);
	}

	.large-card {
		grid-column: 5/7;
		grid-row: 1/3;
	}

	.small-card {
		grid-column: 2/4;
		grid-row: 4/5;
	}
`;

const smallMedia = css`
	.Hatches {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(10, 5rem);
	}

	.large-card {
		grid-column: 2/4;
		grid-row: 7/9;
	}

	.small-card {
		grid-column: 1/3;
		grid-row: 4/5;
	}
`;
