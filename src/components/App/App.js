import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
            <Switch>
                <Route path='/builder/:resumeId?'>
                <GlobalHeader />
                    {(isSignedIn || localStorage.getItem('token') !== null) && <Builder></Builder>}
                    {!isSignedIn && localStorage.getItem('token') == null && <Redirect to='/'></Redirect>}
                </Route>
                <Route path='/download/:resumeId?'>
                    <Builder></Builder>
                </Route>
                <Route path='/contact'>
                    <GlobalHeader />
                    <Contact />
                </Route>
                <Route path='/about'>
                    <GlobalHeader />
                    <About />
                </Route>
                <Route exact path='/resumes'>
                    <GlobalHeader />
                    {(isSignedIn || localStorage.getItem('token') !== null) && <Resumes></Resumes>}
                    {!isSignedIn && localStorage.getItem('token') == null && <Redirect to='/'></Redirect>}
                </Route>
                <Route exact path='/'>
                    <GlobalHeader />
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
