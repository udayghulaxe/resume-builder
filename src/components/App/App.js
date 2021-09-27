import './App.css';

import { Container, Box } from '@mui/material';

import GlobalHeader from '../GlobalHeader/GlobalHeader';

function App() {
  return (
    <div className="App">
        <GlobalHeader/>

        <Container maxWidth="sm">
          <Box m="auto" textAlign="center">
            <h1>Hello World</h1>  
          </Box> 
        </Container>
    </div>
  );
}

export default App;
