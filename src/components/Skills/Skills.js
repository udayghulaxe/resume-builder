import React from "react";
import {Chip} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';

import './Skills.css'
import SkillsEditor from "./SkillsEditor";
const Skills = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div className="resume-section resume-section-skills">
            {/* Component Edit Modal START */}
            <div>
                {/* <Popup 
                    title="Skills"
                    onCancel={handleClose}
                    onSave={handleSave}
                >
                    <SkillsEditor />
                </Popup> */}


                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Skills</DialogTitle>
                    <DialogContent>
                        <SkillsEditor></SkillsEditor>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                    </DialogActions>
                </Dialog>
            </div>
            {/* Component Edit Modal END */}

            <div className="resume-section-title">
                <span>{props.componentData.title}</span>
                <span className="edit-component">
                    <EditIcon onClick={handleClickOpen}/>
                </span>
            </div>   
            
            <div className="skills-item-wrap">
            {props.componentData.items.map((item, index) => {
                return (
                    <Chip key={index} label={item.title} className="skills-chip" variant={props.componentData.variant} />
                );
            })}
            </div>
        </div>
    );
}

export default React.memo(Skills);