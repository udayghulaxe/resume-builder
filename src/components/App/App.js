import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector} from 'react-redux';

import { Container, Box } from '@mui/material';

import GlobalHeader from '../GlobalHeader/GlobalHeader';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Builder from '../../pages/Builder/Builder';


function App() {
const isSignedIn = useSelector(state => state.authReduce.isSignedIn);
  return (
      <Router>
        <GlobalHeader/>
        <div>
          <Switch>
            <Route path="/builder">
              {(isSignedIn || localStorage.getItem('token') !== null) &&(<Builder></Builder>)}
              {(!isSignedIn && localStorage.getItem('token') == null) &&(<Redirect to="/"></Redirect>)}
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route exact path="/">
              <Container maxWidth="sm">
                <Box m="auto" textAlign="center">
                  <h1>Home Page</h1>
                </Box> 
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
