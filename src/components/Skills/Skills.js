import React, {useState} from 'react';
import {Chip} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import EditIcon from '@mui/icons-material/Edit';
import SkillsEditor from "./SkillsEditor";

import './Skills.css'
const Skills = (props) => {
    const [open, setOpen] = useState(false);
    console.log('calling skills', open);
    
    const  openEditor = () => {
        setOpen(true);
    }

    const closeEditor = () => {
        setOpen(false);
    };


    return (
        <div className="resume-section resume-section-skills">
 
            <Dialog maxWidth='sm' fullWidth={true} open={open} onClose={closeEditor}>
                <DialogContent>
                    <SkillsEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>

            <div className="resume-section-title">
                <span>{props.componentItem.componentData.title}</span>
                <span className="edit-component">
                    <EditIcon onClick={openEditor}/>
                </span>
            </div>   
            
            <div className="skills-item-wrap">
            {props.componentItem.componentData.items.map((item, index) => {
                return (
                    <Chip key={index} label={item.title} className="skills-chip" variant={props.componentItem.componentData.variant} />
                );
            })}
            </div>
        </div>
    );
}

export default React.memo(Skills);