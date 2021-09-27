import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Container, Box } from '@mui/material';

import GlobalHeader from '../GlobalHeader/GlobalHeader';

function App() {
  return (
    <div>
        <Router>
        <GlobalHeader/>
          <div>
            <Switch>
              <Route path="/contact">
                <Container maxWidth="sm">
                  <Box m="auto" textAlign="center">
                    <h1>Contact</h1>  
                  </Box> 
                </Container>
              </Route>
              <Route path="/about">
                <Container maxWidth="sm">
                  <Box m="auto" textAlign="center">
                    <h1>About</h1>  
                  </Box> 
                </Container>
              </Route>
              <Route path="/">
                <Container maxWidth="sm">
                  <Box m="auto" textAlign="center">
                    <h1>Home</h1>  
                  </Box> 
                </Container>
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
