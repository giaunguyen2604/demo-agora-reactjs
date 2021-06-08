import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from 'pages/Home'
import Meeting from 'pages/Meeting'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h2 className="text-center mb-2 mt-2">Welcome to Demo Agora Application</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/meeting'} className="nav-link">Meeting</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/meeting' component={Meeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
