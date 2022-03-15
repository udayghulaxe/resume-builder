import React, {useState} from 'react';
import {Chip} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SkillsEditor from "./SkillsEditor";

import './Skills.css'
const Skills = (props) => {
    const [open, setOpen] = useState(false);
    console.log('calling skills', open);
    
    const  openEditor = () => {
        setOpen(true);
    }


    return (
        <div className="resume-section resume-section-skills">
            <div className="resume-section-title">
                <span>{props.componentItem.componentData.title}</span>
                <span className="edit-component-icon">
                    <EditIcon onClick={openEditor}/>
                </span>
            </div>   
            
            <div className="skills-item-wrap">
            {props.componentItem.componentData.items.map((item, index) => {
                return (
                    <Chip key={index} label={item.title} className={`skills-chip ${props.componentItem.componentData.rounded ? '' : 'no-rounded'}`} variant={props.componentItem.componentData.filled ? 'filled' : 'outlined'} />
                );
            })}
            </div>


            <SkillsEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />
        </div>
    );
}

export default React.memo(Skills);