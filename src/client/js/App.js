import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter, 
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

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

class Login extends Component {
  render() {
    return (
      <div>
        <p>You must log in to view this page.</p>
        <button>Log in</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/public'>Public</Link></li>
            <li><Link to='/protected'>Protected</Link></li>
          </ul>

          <Switch>
            <Route exact path='/public' component={Public} />
            <Route exact path='/login' component={Login} />
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
