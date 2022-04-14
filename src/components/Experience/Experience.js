import React,{useState} from "react";
import {Grid, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import EditIcon from '@mui/icons-material/Edit';

import './Experience.css'
import ExperienceEditor from "./ExperienceEditor";

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.caption,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center'
  }));

const Experience = (props) => {
    const [open, setOpen] = useState(false);

    console.log('calling experience', open);
    
    const  openEditor = () => {
        setOpen(true);
    }

    return (
        <div className="resume-section resume-section-experience">
            <div className="resume-section-title">
                <span>{props.componentItem.componentData.title}</span>
                <span className="edit-component-icon">
                    <EditIcon onClick={openEditor} />
                </span>
                </div>     
            <div className="experience-item-wrap">
            {props.componentItem.componentData.items.map((item, index) => {
                return (
                    <div key={index} className="experience-item">
                        <span className="experience-title full-width-field resume-section-subtitle">{item.experienceTitle}</span>
                        <div className="section-meta">
                            {item.company && <div className="section-meta-item">
                                <BusinessIcon fontSize="15"></BusinessIcon> 
                                <Box component="span" sx={{ pl: 1}}>{item.company}</Box>
                            </div>}
                            {item.date && <div className="section-meta-item">
                                <CalendarTodayIcon fontSize="15"></CalendarTodayIcon> 
                                <Box component="span" sx={{ pl: 1}}>{item.date}</Box>
                            </div>}
                            {item.location && <div className="section-meta-item">
                                <LocationOnIcon fontSize="15"></LocationOnIcon>
                                <Box component="span" sx={{ pl: 1}}>{item.location}</Box>
                            </div>}
                        </div>
                        <div className="experience-summary rich-text-div" dangerouslySetInnerHTML={{__html: item.experienceSummary}}>

                        </div>    
                        
                    </div>
                );
            })}
            </div>
            <ExperienceEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />
        </div>
    );
}

export default React.memo(Experience);