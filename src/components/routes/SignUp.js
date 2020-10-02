import React from 'react';

// libraries
import styled from 'styled-components';

const SignUp = () => {
	return (
		<StyledContainer>
			<StyledContainer>
				<form>
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password" />
					<input type="password" placeholder="confirm password" />
					<input type="submit" value="sign in" />
				</form>
			</StyledContainer>
		</StyledContainer>
	);
};

export default SignUp;

const StyledContainer = styled.div``;
