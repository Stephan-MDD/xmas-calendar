import React from 'react';

// libraries
import styled from 'styled-components';

const SignIn = () => {
	return (
		<StyledContainer>
			<form>
				<input type="email" placeholder="email" />
				<input type="password" placeholder="password" />
				<input type="submit" value="sign in" />
			</form>
		</StyledContainer>
	);
};

export default SignIn;

const StyledContainer = styled.div``;
