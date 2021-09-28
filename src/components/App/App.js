import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Container, Box } from '@mui/material';

import GlobalHeader from '../GlobalHeader/GlobalHeader';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

function App() {
  return (
      <Router>
        <GlobalHeader/>
        <div>
          <Switch>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route exact path="/">
              <Container maxWidth="sm">
                <Box m="auto" textAlign="center">
                  <h1>Home</h1>  
                </Box> 
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
