import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { 
  BrowserRouter, 
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './App.css';

import Header from './Header';
import AllElementsFromAPI from './AllElementsFromAPI';
import ElementDetail from './ElementDetail';
import NewElement from './NewElement';
import NewUserSignIn from './NewUserSignIn';
import RegisteredUsers from './RegisteredUsers';
import UserLogIn from './UserLogIn';
// import CurrentUser from './CurrentUser';
// import UserLogout from './UserLogout'

const API_URL = 'http://localhost:3000'

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

  constructor() {
    super();

    this.state = {
      user: [],
      loggedOut: true,
      display: 'none',
    };
  }

  componentWillMount() {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        if (typeof data.body.email === 'string') {
          this.setState({
            user: data.body,
            loggedOut: false,
            display: ''
          })
        }
      })
      .catch(function(e){
        console.log(e)
      })
  };

  actualizarStatePorUserLogin = () => {
    request
      .get(`${API_URL}/auth/current`)
      .then((data) => {
        this.setState({
          user: data.body,
          loggedOut: false,
          display: ''
        })
        // this.props.history.push('/')
      })
      .catch(function(e){
        console.log(e)
      })
  };    

  actualizarStatePorUserLogout = (loggedOut) => {
    this.setState({
      user: [],
      display: 'none',
      loggedOut: loggedOut
    });
  }

  render() {
    console.log(this.state)
    return (
      <MuiThemeProvider>
        {/*<Router>*/}
          { this.state.loggedOut ===  !true 
            ?  
              <div>
                <Header 
                  currentUser={this.state.user.email} 
                  fnActualizarStatePorUserLogout={this.actualizarStatePorUserLogout}
                  displaynone={this.state.display}
                />
                <Switch>
                  <Route exact path='/public' component={Public} />
                  {/* <Route exact path='/login' component={Login} /> */}
                  <Route exact path='/allElementsFromAPI' component={AllElementsFromAPI} />
                  <Route exact path='/newElement' component={NewElement} />
                  <Route path='/talentos/:talentosId' component={ElementDetail} />
                  <Route exact path='/newUserSignIn' component={NewUserSignIn} />
                  {/* <Route exact path='/registeredUsers' component={RegisteredUsers} /> */}
                  {/*<Route exact path='/userLogIn' component={UserLogIn} /> */}
                  {/* <Route exact path='/currentUser' component={CurrentUser} /> */}
                  {/* <Route exact path='/userLogout' component={UserLogout} /> */}
                  {/*<PrivateRoute path='/protected' component={Protected} /> */}
                  {/* <PrivateRoute path='/protectedVault' component={ProtectedVault} /> */}
                </Switch>
              </div>
           : <UserLogIn 
                fnActualizarStatePorUserLogin={this.actualizarStatePorUserLogin}
              />
          }
        {/*</Router>*/}
      </MuiThemeProvider>
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
    <Router>
      <App/>
    </Router>
  </BrowserRouter>, document.getElementById('app-container'));
