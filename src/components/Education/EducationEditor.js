import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch, Divider, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { updateResumeDataReducer } from '../../reducers/resumeDataSlice';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


const EducationEditor = (props) => {
    const [editorData, setEditorData] = useState(props.editorData);
    const [title, setTitle] = useState(editorData.title);
    const [educationItems, setEducationItems] = useState(editorData.items);
    const dispatch = useDispatch();

    const onTitleChange = (event) => {
        const newVal = event.target.value;
        setTitle(newVal);
    }

    const onSave = (event) => {
        // setEditorData({ ...editorData, title: title, showIcon: showIcon, items: educationItems.filter((item, index) => item.title.length > 0) });
        // setFirstTime(true);
        // console.log(editorData);
    }

    const closeEditor = () => {
        props.setOpen(false);
    };


    return (
        <Dialog maxWidth='sm' fullWidth={true} open={props.open} onClose={closeEditor}>
            <DialogContent>
                <div className='editor-wrap'>
                    <div className='editor-heading-wrap'>
                        <TextField fullWidth autoComplete='off' onChange={onTitleChange} value={title} variant="standard" />
                    </div>
                    <div className="editor-items-wrap">
                        {educationItems.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='editor-item' >
                                        <div>
                                            <TextField
                                                label='Degree & Field of Study'
                                                sx={{ mb: 1, mt: 1, mr: 1}}
                                                // onChange={(event) => onAchievementChange(event, index)}
                                                value={item.title}
                                                data-key={index}
                                                inputProps={{style: {fontSize: 14}}}
                                                style = {{width: 215}}
                                                size='small'
                                            />
                                            <TextField
                                                label='University or School'
                                                sx={{ mb: 1, mt: 1, mr: 1}}
                                                // onChange={(event) => onAchievementChange(event, index)}
                                                value={item.university}
                                                data-key={index}
                                                inputProps={{style: {fontSize: 14}}}
                                                style = {{width: 210}}
                                                size='small'
                                            />
                                            <TextField
                                                label='Year From'
                                                sx={{ mb: 1, mt: 1, mr: 1}}
                                                // onChange={(event) => onAchievementChange(event, index)}
                                                value={item.date}
                                                data-key={index}
                                                inputProps={{style: {fontSize: 14}}}
                                                style = {{width: 140}}
                                                size='small'
                                            />
                                            <TextField
                                                label='Year To'
                                                sx={{ mb: 1, mt: 1, mr: 1}}
                                                // onChange={(event) => onAchievementChange(event, index)}
                                                value={item.date}
                                                data-key={index}
                                                inputProps={{style: {fontSize: 14}}}
                                                style = {{width: 140}}
                                                size='small'
                                            />
                                            <TextField
                                                label='Percentage or CGPA'
                                                sx={{ mb: 1, mt: 1, mr: 1}}
                                                // onChange={(event) => onAchievementChange(event, index)}
                                                value={item.gpa}
                                                data-key={index}
                                                inputProps={{style: {fontSize: 14}}}
                                                style = {{width: 140}}
                                                size='small'
                                            />
                                            
                                        </div>
                                        <AddCircleIcon className='add-item-icon'></AddCircleIcon>
                                        <DeleteForeverIcon  className={`delete-item-icon ${index === 0 ? 'd-none' : ''}`}></DeleteForeverIcon>
                                    </div>
                                    <Box sx={{height: 20}}></Box>
                                    <Divider></Divider>
                                    <Box sx={{height: 20}}></Box>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={closeEditor}>Cancel</Button>
                <Button onClick={onSave} >Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EducationEditor;