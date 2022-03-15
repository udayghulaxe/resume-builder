import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { updateResumeDataReducer } from '../../reducers/resumeDataSlice';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const AchievementEditor = (props) => {
    const [editorData, setEditorData] = useState(props.editorData);
    const [firstime, setFirstTime] = useState(false);
    const [title, setTitle] = useState(editorData.title);
    const [achievementItems, setAchievementItems] = useState(editorData.items);
    const [showIcon, setShowIcon] = useState(editorData.showIcon);
    const dispatch = useDispatch();

    const onTitleChange = (event) => {
        const newVal = event.target.value;
        setTitle(newVal);
    }

    const onShowIconChange = (event) => {
        setShowIcon(event.target.checked);
    }


    const onAchievementChange = (event, index) => {
        let skills = [...achievementItems];
        skills[index] = { title: event.target.value };
        setAchievementItems(skills);
    }

    const onAddAchievement = (event, index) => {
        let skills = [...achievementItems];
        skills.splice(index + 1, 0, { title: '' });
        setAchievementItems(skills);
    }
    const onDeleteAchievement = (event, index) => {
        let skills = [...achievementItems];
        skills.splice(index, 1);
        setAchievementItems(skills);
    }

    const onSave = (event) => {
        setEditorData({ ...editorData, title: title, showIcon: showIcon, items: achievementItems.filter((item, index) => item.title.length > 0) });
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
                            Show Icon: <Switch label="Rounded" onChange={onShowIconChange} checked={showIcon} />
                        </div>
                    </div>

                    <div className="editor-items-wrap">
                        {achievementItems.map((item, index) => {
                            return (
                                <div className='editor-item' key={index}>
                                    <TextField
                                        label={"Option " + (index + 1)}
                                        sx={{ mb: 1, mt: 1, mr: 1}}
                                        onChange={(event) => onAchievementChange(event, index)}
                                        value={item.title}
                                        data-key={index}
                                        multiline
                                        rows={2}
                                        inputProps={{style: {fontSize: 14, lineHeight: 1.2}}}
                                        style = {{width: 380}}
                                    />
                                    <AddCircleIcon onClick={(event) => onAddAchievement(event, index)} className='add-item-icon'></AddCircleIcon>
                                    <DeleteForeverIcon onClick={(event) => onDeleteAchievement(event, index)} className={`delete-item-icon ${index === 0 ? 'd-none' : ''}`}></DeleteForeverIcon>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={closeEditor}>Cancel</Button>
                <Button onClick={onSave} disabled={!achievementItems.filter(item => item.title.length > 0).length}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AchievementEditor;