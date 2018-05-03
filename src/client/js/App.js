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

//--------- AuthService to fake our API requests
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
    return <h3>Protected</h3>
  }
}

class ProtectedVault extends Component {
  render() {
    return <h3>Protected Vault</h3>
  }
}

class Login extends Component {

  constructor(props) {
    super();
    this.state = {
      redirectToReferrer: false
    }
  }

  handleLogin() {
    AuthService.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  render() {
    console.log(this.state.redirectToReferrer)

    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if ( redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view this page. <strong>{ from.pathname }</strong>, my friend :)</p>
        <button onClick={this.handleLogin}>Log in</button>
      </div>
    )
  }
}


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     AuthService.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }} />
//   )} />
// )

const PrivateRoute = ({ component: Component }) => (
  <Route render={(props) => (
    AuthService.isAuthenticated === true
      ? <Component />
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
          </ul>

          <Switch>
            <Route exact path='/public' component={Public} />
            <Route exact path='/login' component={Login} />
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
