import React from "react";
import {Grid, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import EditIcon from '@mui/icons-material/Edit';

import './Experience.css'

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.caption,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }));

const Experience = (props) => {
    return (
        <div className="resume-section resume-section-experience">
            <div className="resume-section-title">
                <span>{props.componentData.title}</span>
                <span className="edit-component">
                    <EditIcon/>
                </span>
                </div>     
            <div className="experience-item-wrap">
            {props.componentData.items.map((item, index) => {
                return (
                    <div key={index} className="experience-item">
                        <span className="experience-title full-width-field">{item.experienceTitle}</span>
                        <Grid
                            container 
                            justifyContent="center" 
                            alignItems="center" 
                            rowSpacing={0.5} 
                            columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}>
                            <Grid item xs={4}>
                                <Item>
                                    <BusinessIcon fontSize="15"></BusinessIcon> 
                                    <Box component="span" sx={{ pl: 1}}>{item.company}</Box>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <CalendarTodayIcon fontSize="15"></CalendarTodayIcon> 
                                    <Box component="span" sx={{ pl: 1}}>{item.date}</Box>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>
                                    <LocationOnIcon fontSize="15"></LocationOnIcon>
                                    <Box component="span" sx={{ pl: 1}}>{item.location}</Box>
                                </Item>
                            </Grid>
                        </Grid>
                        <span className="experience-summary">
                        {item.experienceSummary}
                        </span>    
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Experience;