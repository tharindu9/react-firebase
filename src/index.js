import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import User from './User';

const routing = (
    <Router>
      <div>
      {/* <ul>
        <li>
          <Link to="/">To Do App</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul> */}



        <Route exact path="/" component={App} />
        <Route path="/users" component={User} />
       
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
