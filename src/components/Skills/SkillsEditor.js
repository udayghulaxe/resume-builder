import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { updateResumeDataReducer } from '../../reducers/resumeDataSlice';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


const SkillsEditor = (props) => {
    const [editorData, setEditorData] = useState(props.editorData);
    const [firstime, setFirstTime] = useState(false);
    const [title, setTitle] = useState(editorData.title);
    const [skillItems, setSkillItems] = useState(editorData.items);
    const [rounded, setRounded] = useState(editorData.rounded);
    const [filled, setFilled] = useState(editorData.filled);
    const dispatch = useDispatch();

    const onTitleChange = (event) => {
        const newVal = event.target.value;
        setTitle(newVal);
    }

    const onRoundedChange = (event) => {
        setRounded(event.target.checked);
    }

    const onFilledChange = (event) => {
        setFilled(event.target.checked);
    }

    const onSkillChange = (event, index) => {
        let skills = [...skillItems];
        skills[index] = { title: event.target.value };
        setSkillItems(skills);
    }

    const onAddSkill = (event, index) => {
        let skills = [...skillItems];
        skills.splice(index + 1, 0, { title: '' });
        setSkillItems(skills);
    }
    const onDeleteSkill = (event, index) => {
        let skills = [...skillItems];
        skills.splice(index, 1);
        setSkillItems(skills);
    }

    const onSave = (event) => {
        setEditorData({ ...editorData, rounded: rounded, filled: filled, title: title, items: skillItems.filter((item, index) => item.title.length > 0) });
        setFirstTime(true);
        console.log(editorData);
    }

    const closeEditor = () => {
        props.setOpen(false);
    };

    useEffect(() => {
        if (firstime) {
            dispatch(updateResumeDataReducer({ name: props.componentName, column: props.componentColumn, data: editorData }));
            setFirstTime(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editorData]);

    return (
        <Dialog maxWidth='sm' fullWidth={true} open={props.open} onClose={closeEditor}>
            <DialogContent>
                <div className='editor-wrap'>
                    <div className='editor-heading-wrap'>
                        <TextField fullWidth autoComplete='off' onChange={onTitleChange} value={title} variant="standard" />
                    </div>
                    <div className="editor-options-wrap">
                        <div>
                            Rounded: <Switch label="Rounded" onChange={onRoundedChange} checked={rounded} />
                        </div>
                        <div>
                            Filled: <Switch label="Filled" onChange={onFilledChange} checked={filled} />
                        </div>
                    </div>
                    <div className="editor-items-wrap">
                        {skillItems.map((item, index) => {
                            return (
                                <div className='editor-item' key={index}>
                                    <TextField
                                        label={"Option " + (index + 1)}
                                        sx={{ mb: 1, mt: 1, mr: 1 }}
                                        onChange={(event) => onSkillChange(event, index)}
                                        value={item.title}
                                        data-key={index}
                                        size="small"
                                    />
                                    <AddCircleIcon onClick={(event) => onAddSkill(event, index)} className='add-item-icon'></AddCircleIcon>
                                    <DeleteForeverIcon onClick={(event) => onDeleteSkill(event, index)} className={`delete-item-icon ${index === 0 ? 'd-none' : ''}`}></DeleteForeverIcon>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={closeEditor}>Cancel</Button>
                <Button onClick={onSave} disabled={!skillItems.filter(item => item.title.length > 0).length} >Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default SkillsEditor;