import React from "react";
import {Grid, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

import './Experience.css'

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.caption,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }));

const Experience = () => {
    return (
        <div className="resume-section resume-section-experience">
            <span className="resume-section-title">Experience</span>     
            <div className="experience-item-wrap">
                <div className="experience-item">
                    <span className="experience-title full-width-field">Android Developer</span>
                    <Grid
                        container 
                        justifyContent="center" 
                        alignItems="center" 
                        rowSpacing={0.5} 
                        columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}>
                        <Grid item xs={4}>
                            <Item>
                                <BusinessIcon fontSize="15"></BusinessIcon> 
                                <Box component="span" sx={{ pl: 1}}>Google Inc.</Box>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <CalendarTodayIcon fontSize="15"></CalendarTodayIcon> 
                                <Box component="span" sx={{ pl: 1}}>2018 - 2020</Box>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <LocationOnIcon fontSize="15"></LocationOnIcon>
                                <Box component="span" sx={{ pl: 1}}>New York</Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <span className="experience-summary">
                        Worked with team of 5 members and provided end-to-end solutions for clients & Lead developer in 3 key projects of major clients.
                    </span>    
                </div>


                <div className="experience-item">
                    <span className="experience-title full-width-field">Front-end Developer</span>
                    <Grid
                        container 
                        justifyContent="center" 
                        alignItems="center" 
                        rowSpacing={0.5} 
                        columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}>
                        <Grid item xs={4}>
                            <Item>
                                <BusinessIcon fontSize="15"></BusinessIcon> 
                                <Box component="span" sx={{ pl: 1}}>Amazon</Box>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <CalendarTodayIcon fontSize="15"></CalendarTodayIcon> 
                                <Box component="span" sx={{ pl: 1}}>2014 - 2028</Box>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <LocationOnIcon fontSize="15"></LocationOnIcon>
                                <Box component="span" sx={{ pl: 1}}>New York</Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <span className="experience-summary">
                        Worked with team of 5 members and provided end-to-end solutions for clients & Lead developer in 3 key projects of major clients.
                    </span>    
                </div>
            </div>
        </div>
    );
}

export default Experience;