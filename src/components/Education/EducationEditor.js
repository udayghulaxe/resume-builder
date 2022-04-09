import React, { useState, useEffect } from 'react';
import { TextField, Button, Divider, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { updateResumeDataReducer } from '../../reducers/resumeDataSlice';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


const EducationEditor = (props) => {
    const [editorData, setEditorData] = useState(props.editorData);
    const [firstime, setFirstTime] = useState(false);
    const [title, setTitle] = useState(editorData.title);
    const [educationItems, setEducationItems] = useState(editorData.items);
    const dispatch = useDispatch();

    const onTitleChange = (event) => {
        const newVal = event.target.value;
        setTitle(newVal);
    }

    const onEducationTitleChange = (event, index) => {
        const newTitle = event.target.value;
        let newEducationItems = [...educationItems];
        newEducationItems[index] = {...newEducationItems[index], title: newTitle};
        setEducationItems(newEducationItems);
    }

    const onUniversityChange = (event, index) => {
        const newUniversity = event.target.value;
        let newEducationItems = [...educationItems];
        newEducationItems[index] = {...newEducationItems[index], university: newUniversity};
        setEducationItems(newEducationItems);
    }


    const onDateChange = (event, index) => {
        const newDate = event.target.value;
        let newEducationItems = [...educationItems];
        newEducationItems[index] = {...newEducationItems[index], date: newDate};
        console.log(educationItems);
        setEducationItems(newEducationItems);
    }

    const onGpaChange = (event, index) => {
        const newGPA = event.target.value;
        let newEducationItems = [...educationItems];
        newEducationItems[index] = {...newEducationItems[index], gpa: newGPA};
        setEducationItems(newEducationItems);
    }

    const onAddEducation = (event, index) => {
        let newEducationItems = [...educationItems];
        newEducationItems.splice(index + 1, 0, { title: '', university: '', date: '', gpa: '' });
        setEducationItems(newEducationItems);
    }
    const onDeleteEducation = (event, index) => {
        let newEducationItems = [...educationItems];
        newEducationItems.splice(index, 1);
        setEducationItems(newEducationItems);
    }

    const onSave = (event) => {
        console.log('educationItems', educationItems);
        setEditorData({ ...editorData, title: title,  items: educationItems.filter((item, index) => item.title.length > 0) });
        setFirstTime(true);
        closeEditor();
        console.log(editorData);
    }

    const closeEditor = () => {
        props.setOpen(false);
    };

    useEffect(() => {
        if (firstime) {
            console.log('props', props);
           dispatch(updateResumeDataReducer({ name: props.componentName, column: props.componentColumn, data: editorData }));
           setFirstTime(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editorData]);


    return (
        <Dialog maxWidth='sm' open={props.open} onClose={closeEditor}>
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
                                                onChange={(event) => onEducationTitleChange(event, index)}
                                                value={item.title}
                                                data-key={index}
                                                inputProps={{style: {fontSize: 14}}}
                                                size='small'
                                            />
                                            <TextField
                                                label='University or School'
                                                sx={{ mb: 1, mt: 1, mr: 1}}
                                                onChange={(event) => onUniversityChange(event, index)}
                                                value={item.university}
                                                data-key={index}
                                                inputProps={{style: {fontSize: 14}}}
                                                size='small'
                                            />
                                            <TextField
                                                label='Date (From - To)'
                                                sx={{ mb: 1, mt: 1, mr: 1}}
                                                onChange={(event) => onDateChange(event, index)}
                                                value={item.date}
                                                data-key={index}
                                                placeholder='YYYY - YYYY'
                                                inputProps={{style: {fontSize: 14}}}
                                                size='small'
                                            />
                                            <TextField
                                                label='Percentage or CGPA'
                                                sx={{ mb: 1, mt: 1, mr: 1}}
                                                onChange={(event) => onGpaChange(event, index)}
                                                value={item.gpa}
                                                data-key={index}
                                                inputProps={{style: {fontSize: 14}}}
                                                size='small'
                                            />
                                            
                                        </div>
                                        <AddCircleIcon onClick={(event) => onAddEducation(event, index)} className='add-item-icon'></AddCircleIcon>
                                        <DeleteForeverIcon onClick={(event) => onDeleteEducation(event, index)}  className={`delete-item-icon ${index === 0 ? 'd-none' : ''}`}></DeleteForeverIcon>
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
                <Button onClick={onSave} disabled={!educationItems.filter(item => item.title.length > 0).length}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EducationEditor;