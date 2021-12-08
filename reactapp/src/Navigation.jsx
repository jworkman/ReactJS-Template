import React from 'react'
import { Link } from 'react-router-dom';

class Navigation extends React.Component
{
	render() {
		return (
			<header>
				<ul>
					<li><Link to="/">Home</Link></li>
					{this.props.isLoggedIn && <li><Link to="/logout">Logout</Link></li>}
				</ul>
			</header>
		);
	}
}

export default Navigation;