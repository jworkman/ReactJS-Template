import React from 'react'

class Login extends React.Component
{
	render() {
		return (
			<div>
				<h1>Login</h1>
				<p>To login with github please click on the link below</p>
				<a href="https://github.com/login/oauth/authorize?client_id=8c96c7d550e48835b6d5">Login With Github</a>
			</div>
		)
	}
}

export default Login
