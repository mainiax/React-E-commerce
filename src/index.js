import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-wz0o4oo2.us.auth0.com
// roQ9Lk6gk813GbMUl3Axuz3d4ntZY4AS

ReactDOM.render(
	<Auth0Provider
		domain={process.env.REACT_APP_DOMAIN_KEY}
		clientId={process.env.REACT_APP_CLIENT_ID}
		redirectUri={window.location.origin}
		cacheLocation="localstorage"
	>
		<UserProvider>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>,

	document.getElementById('root')
);
