import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter, 
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

// import './App.css';

import AllElementsFromAPI from './AllElementsFromAPI';
import ElementDetail from './ElementDetail';
import NewElement from './NewElement';
import NewUserSignIn from './NewUserSignIn';
import RegisteredUsers from './RegisteredUsers';
import UserLogIn from './UserLogIn';
import CurrentUser from './CurrentUser';
import UserLogout from './UserLogout'

//--------- AuthService to fake API requests
const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true,
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false,
    setTimeout(cb, 100)
  }
}
//----------

class Public extends Component {
  render() {
    return <h3>Public</h3>
  }
}

class Protected extends Component {
  render() {
    return <h3>Acceso autorizado a Protected</h3>
  }
}

class ProtectedVault extends Component {
  render() {
    return (
      <div>
        <h3>Acceso autorizado a Protected Vault</h3>
      </div>
      )
  }
}

class Login extends Component {

  state = {
      redirectToReferrer: false
    }
  
  handleLogin = () => {
    AuthService.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {

    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if ( redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view this page. Pagina desde la que se intento accesar: <strong>{ from.pathname }</strong></p>
        <button onClick={this.handleLogin}>Log in</button>
      </div>
    )
  }
}


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/public'>Public</Link></li>
            <li><Link to='/protected'>Protected</Link></li>
            <li><Link to='/protectedVault'>ProtectedVault</Link></li>
            <li><Link to='/allElementsFromAPI'>AllElementsFromAPI</Link></li>
            <li><Link to='/newElement'>NewElement</Link></li>
            <li><Link to='/registeredUsers'>RegisteredUsers</Link></li>
            <li><Link to='/newUserSignIn'>NewUserSignIn</Link></li>
            <li><Link to='/userLogIn'>UserLogIn</Link></li>
            <li><Link to='/currentUser'>CurrentUser</Link></li>
            <li><Link to='/userLogout'>UserLogOut</Link></li>
          </ul>

          <Switch>
            <Route exact path='/public' component={Public} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/allElementsFromAPI' component={AllElementsFromAPI} />
            <Route exact path='/newElement' component={NewElement} />
            <Route path='/talentos/:talentosId' component={ElementDetail} />
            <Route exact path='/newUserSignIn' component={NewUserSignIn} />
            <Route exact path='/registeredUsers' component={RegisteredUsers} />
            <Route exact path='/userLogIn' component={UserLogIn} />
            <Route exact path='/currentUser' component={CurrentUser} />
            <Route exact path='/userLogout' component={UserLogout} />
            <PrivateRoute path='/protected' component={Protected} />
            <PrivateRoute path='/protectedVault' component={ProtectedVault} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { 
//   Switch,
//   Route,
//   BrowserRouter 
//   } from 'react-router-dom';


// class Public extends Component {
//   render() {
//     return <h3>Public</h3>
//   }
// }

// class About extends Component {
//   render() {
//     return <h3>About react</h3>
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <li>Public</li>
//           <li>Protected</li>
//         </ul>
//         <Switch>
//           <Route exact path='/about' component={About} /> 
//         </Switch>  
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, document.getElementById('app-container'));
