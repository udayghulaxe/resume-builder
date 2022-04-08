import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector} from 'react-redux';

import GlobalHeader from '../GlobalHeader/GlobalHeader';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Builder from '../../pages/Builder/Builder';
import Resumes from '../../pages/Resumes/Resumes';
import Home from '../../pages/Home/Home';

function App() {
const isSignedIn = useSelector(state => state.authReducer.isSignedIn);
  return (
      <Router>
        <GlobalHeader/>
          <Switch>
            <Route path="/builder/:resumeId?">
              {(isSignedIn || localStorage.getItem('token') !== null) &&(<Builder></Builder>)}
              {(!isSignedIn && localStorage.getItem('token') == null) &&(<Redirect to="/"></Redirect>)}
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route exact path="/resumes">
              {(isSignedIn || localStorage.getItem('token') !== null) &&(<Resumes></Resumes>)}
              {(!isSignedIn && localStorage.getItem('token') == null) &&(<Redirect to="/"></Redirect>)}
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
