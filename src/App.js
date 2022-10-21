import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
} from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import styled from 'styled-components';
import {
	Home,
	Products,
	About,
	Cart,
	Error,
	Checkout,
	PrivateRoute,
	SingleProductPage,
	AuthWrapper,
} from './pages';

const Button = styled.button`
	background: green;
	color: white;
`;
const Container = styled.div`
	background: red;
	color: white;
	font-size: 2rem;
	.hero {
		font-size: 8rem;
		text-align: center;
	}
`;
const Container2 = styled.div`
	background: red;
	color: white;
	font-size: 2rem;
	.hero {
		font-size: 8rem;
		text-align: left;
	}
`;
function App() {
	return (
		<AuthWrapper>
			<Router>
				<Navbar />
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<SingleProductPage />} />
					<Route
						path="checkout"
						element={
							<PrivateRoute>
								{' '}
								<Checkout />
							</PrivateRoute>
						}
					/>
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</AuthWrapper>
	);
}

export default App;
