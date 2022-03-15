import React, { useState } from "react";
import {Grid, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';

import EducationEditor from "./EducationEditor";

import './Education.css'

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.caption,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }));

const Education = (props) => {
    const [open, setOpen] = useState(false);
    console.log('calling achievment', open);

    const  openEditor = () => {
        setOpen(true);
    }

    return (
        <div className="resume-section resume-section-education">
            <div className="resume-section-title">
                <span>{props.componentItem.componentData.title}</span>
                <span className="edit-component-icon">
                    <EditIcon onClick={openEditor} />
                </span>
            </div>     
            <div className="education-item-wrap">
                {props.componentItem.componentData.items.map((item, index) => {
                    return (
                        <div key={index} className="education-item">
                            <span className="education-title full-width-field">{item.title}</span>
                            <span className="education-university full-width-field">{item.university}</span>
                            <Grid
                                container 
                                justifyContent="start" 
                                alignItems="center" 
                                rowSpacing={0.5} 
                                columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}>
                                <Grid item md={4} xs={6}>
                                    <Item>
                                        <CalendarTodayIcon fontSize="15"></CalendarTodayIcon> 
                                        <Box component="span" sx={{ pl: 1}}>{item.date}</Box>
                                    </Item>
                                </Grid>
                                <Grid item md={4} xs={6}>
                                    <Item>
                                        <SchoolIcon fontSize="15"></SchoolIcon>
                                        <Box component="span" sx={{ pl: 1}}>{item.gpa}</Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </div>
                    );
                })}
            </div>

            <EducationEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />
        </div>
    );
}

export default Education;