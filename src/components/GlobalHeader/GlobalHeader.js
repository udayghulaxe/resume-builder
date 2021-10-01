import React from "react";
import {AppBar, Box, Toolbar, Button} from '@mui/material';
import logo from '../../logo.svg';
import { NavLink, useLocation } from "react-router-dom";

import GoogleLogin from '../Login/GoogleLogin'

import './GlobalHeader.css'

const GlobalHeader = () => {
    return (useLocation().pathname !== '/builder') ? (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={0} className="global-header" color="transparent" position="static">
                <Toolbar>
                    <img src={logo} className="header-logo" alt="Resume Builder"/>
                    <div className="header-logo-text">
                        <span>Resume Builder</span>
                    </div>
                    <nav>
                        <Button
                            component={NavLink}
                            to="/"
                            exact
                            variant="text"
                            color="primary" 
                            disableElevation
                            className="mobile-d-none header-menu-link">
                                Home
                        </Button>
                        <Button 
                            component={NavLink}
                            to="/about"
                            variant="text"
                            color="primary" 
                            disableElevation
                            className="mobile-d-none header-menu-link">
                                About
                        </Button>
                        <Button
                            component={NavLink}
                            to="/contact"
                            variant="text"
                            color="primary" 
                            disableElevation
                            className="mobile-d-none header-menu-link">
                                Contact
                        </Button>
                        <GoogleLogin></GoogleLogin>
                    </nav>
                </Toolbar>
            </AppBar>
        </Box>
    ) : <span></span>
}

export default GlobalHeader;