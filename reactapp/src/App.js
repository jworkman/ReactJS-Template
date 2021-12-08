import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Navigation from './Navigation'
import Home from './Home'
import Login from './Login'
import Quiz from './Quiz'
import queryString from 'querystring';

const App = () => {
  const [jwt, setJwt] = useState('')
  useEffect(() => {
    async function fetchJwt() {
      const params = queryString.parse(window.location.search.replace(/^\?/, ''))
      localStorage.token = params.token
      const response = await axios('http://localhost:3000/auth/token/', {
        headers: {
          token: localStorage.token
        }
      })
      setJwt(response.data.token)
    }
    fetchJwt()
  }, []);

  if (!jwt) {
    return <Login />;
  }

  return (
    <Router>
      <div className="App">
        <Navigation isLoggedIn={jwt ? true : false} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/quizzes/:id' element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // Don't call this.setState() here!
//     this.state = { jwt: '' };
//   }
//   async componentDidMount() {
//     const jwt = await axios('http://localhost:3000/auth/token')
//     this.setState({ jwt: jwt.data.token })
//   }
//   render() {
//     // If we are not logged in
//     if (!this.state.jwt) {
//       return <Login />;
//     }

//     return (
//       <Router>
//         <div className="App">
//           <Navigation isLoggedIn={this.state.jwt ? true : false} />
//           <Routes>
//             <Route exact path='/' element={<Home />} />
//             <Route exact path='/quizzes/:id' element={<Quiz {...this.props} />} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
