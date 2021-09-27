import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../logo.svg';
import './GlobalHeader.css'

const GlobalHeader = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={1} className="global-header" color="transparent" position="static">
                <Toolbar>
                    <img src={logo} className="header-logo" alt="Resume Builder"/>
                    <div className="header-logo-text">
                        <span>Resume Builder</span>
                    </div>
                    <Button 
                        variant="text"
                        color="primary" 
                        disableElevation
                        className="mobile-d-none header-menu-link">
                            Home
                    </Button>
                    <Button 
                        variant="text"
                        color="primary" 
                        disableElevation
                        className="mobile-d-none header-menu-link">
                            About
                    </Button>
                    <Button 
                        variant="text"
                        color="primary" 
                        disableElevation
                        className="mobile-d-none header-menu-link">
                            Contact
                    </Button>
                    <Button 
                        variant="contained"
                        color="primary" 
                        disableElevation
                        className="header-login-button">
                            Create Resume
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default GlobalHeader;