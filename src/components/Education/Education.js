import React from "react";
import {Grid, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';

import './Education.css'

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.caption,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }));

const Education = () => {
    return (
        <div className="resume-section resume-section-education">
            <span className="resume-section-title">Education</span>     
            <div className="education-item-wrap">
                <div className="education-item">
                    <span className="education-title full-width-field">Executive MBA, Engineering Management</span>
                    <span className="education-university full-width-field">The University of Arizona</span>
                    <Grid
                        container 
                        justifyContent="center" 
                        alignItems="center" 
                        rowSpacing={0.5} 
                        columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}>
                        <Grid item xs={6}>
                            <Item>
                                <CalendarTodayIcon fontSize="15"></CalendarTodayIcon> 
                                <Box component="span" sx={{ pl: 1}}>2010 - 2014</Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <SchoolIcon fontSize="15"></SchoolIcon>
                                <Box component="span" sx={{ pl: 1}}>CGPA 09/10</Box>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <div className="education-item">
                    <span className="education-title full-width-field">Executive MBA, Engineering Management</span>
                    <span className="education-university full-width-field">The University of Arizona</span>
                    <Grid
                        container 
                        justifyContent="center" 
                        alignItems="center" 
                        rowSpacing={0.5} 
                        columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}>
                        <Grid item xs={6}>
                            <Item>
                                <CalendarTodayIcon fontSize="15"></CalendarTodayIcon> 
                                <Box component="span" sx={{ pl: 1}}>2010 - 2014</Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <SchoolIcon fontSize="15"></SchoolIcon>
                                <Box component="span" sx={{ pl: 1}}>CGPA 09/10</Box>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Education;