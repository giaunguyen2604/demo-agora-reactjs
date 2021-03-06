import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from 'pages/Home'
import Meeting from 'pages/Meeting'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/meeting'} className="nav-link">Meeting</Link></li>
            {/* <li><Link to={'/meetingdemo'} className="nav-link">Meeting demo</Link></li> */}
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/meeting' component={Meeting} />
          {/* <Route path='/meetingdemo' component={MeetingDemo} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
