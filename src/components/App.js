import React from 'react';

// libraries
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import NotFound from './routes/NotFound';

// scripts
import * as styles from '../scripts/styles';

// assets
import Pacifico from '../assets/fonts/Pacifico-Regular.ttf';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Pacifico';
		src: local('Pacifico'), url(${Pacifico}) format('truetype');
	}

	body {
		font-family: Pacifico, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: ${styles.colors.green.opaque};
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}
`;
