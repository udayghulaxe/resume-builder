import React from "react";
import logo from '../../logo.svg';
import './Builder.css'
import {AppBar, Box, Toolbar, Link, Paper} from '@mui/material';

import BasicInfo from "../../components/BasicInfo/BasicInfo";
import Education from "../../components/Education/Education";

function Builder() {
  return (
    <div className="builder-wrap">
      <Box sx={{ flexGrow: 1 }}>
              <AppBar elevation={0} className="global-header" color="inherit" position="fixed">
                  <Toolbar>
                      <img src={logo} className="header-logo" alt="Resume Builder"/>
                      <div>
                        <Link underline="none" className="builder-header-menu-link active" href="#">About</Link>
                        <Link underline="none" className="builder-header-menu-link" href="#">Experience</Link>
                        <Link underline="none" className="builder-header-menu-link" href="#">Education</Link>
                        <Link underline="none" className="builder-header-menu-link" href="#">Skills</Link>
                        <Link underline="none" className="builder-header-menu-link" href="#">Languages</Link>
                        <Link underline="none" className="builder-header-menu-link" href="#">Awards</Link>
                      </div>
                  </Toolbar>
              </AppBar>
          </Box>
          <div className="resume-paper-wrap">
              <Paper className="resume-paper" elevation={3} >
                <div className="resume-paper-content">
                    <BasicInfo></BasicInfo>
                    <Education></Education>
                    <Education></Education>
                    <Education></Education>
                </div>
              </Paper>
          </div>
        </div>
  );
}

export default Builder;