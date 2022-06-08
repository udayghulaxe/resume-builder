import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateResumeDataByResumeId, updateOpenEditorName } from '../../reducers/resumeDataSlice';
import { useParams } from 'react-router-dom';
import { richEditorSettings } from '../../globals.js';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AchievementEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData);
    const { resumeDataReducer } = useSelector(state => state);
    const { resumeId } = useParams();
    const dispatch = useDispatch();

    const onWidgetDataChange = (key, newValue) => {
        const newData = { ...editorData, [key]: newValue };
        setEditorData(newData);
        props.setWidgetData(newData);
    };

    const onTitleChange = event => {
        const newVal = event.target.value;
        onWidgetDataChange('title', newVal);
    };

    const onShowIconChange = event => {
        onWidgetDataChange('showIcon', event.target.checked);
    };

    const onAchievementChange = (val, index) => {
        let achievement = [...editorData.items];
        achievement[index] = { title: val };
        onWidgetDataChange('items', achievement);
    };

    const onAddAchievement = (event, index) => {
        let achievement = [...editorData.items];
        achievement.splice(index + 1, 0, { title: '' });
        onWidgetDataChange('items', achievement);
    };
    const onDeleteAchievement = (event, index) => {
        let achievement = [...editorData.items];
        achievement.splice(index, 1);
        onWidgetDataChange('items', achievement);
    };

    const onSave = event => {
        const newData = { ...editorData };
        const data = JSON.parse(JSON.stringify(resumeDataReducer.resumeData));
        data[props.componentColumn].filter(item => item.name === props.componentName)[0].componentData =
        newData;

        dispatch(updateResumeDataByResumeId({data, resumeId}));
        closeEditor();
    };

    const closeEditor = () => {
        dispatch(updateOpenEditorName(null));
    };

    return ReactDOM.createPortal(
        <div className='editor-wrap'>
            <div className='editor-section-header'>
                <Button
                    variant='contained'
                    size='small'
                    onClick={onSave}
                    disabled={!editorData.items.filter(item => item.title.length > 0).length}
                >
                    Save Changes
                </Button>
                <Button variant='outlined' size='small' onClick={onSave}>
                    Close
                </Button>
            </div>
            <div className='editor-heading-wrap'>
                <TextField
                    label='Title'
                    fullWidth
                    autoComplete='off'
                    onChange={onTitleChange}
                    value={editorData.title}
                    variant='standard'
                />
            </div>

            <div className='editor-options-wrap'>
                <div>
                    Show Icon: <Switch label='Rounded' onChange={onShowIconChange} checked={editorData.showIcon} />
                </div>
            </div>

            <div className='editor-items-wrap'>
                {editorData.items.map((item, index) => {
                    return (
                        <div className='editor-item' style={{ marginBottom: '20px' }} key={index}>
                            {/* <TextField
                                label={'Option ' + (index + 1)}
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onAchievementChange(event, index)}
                                value={item.title}
                                data-key={index}
                                multiline
                                rows={2}
                                inputProps={{ style: { fontSize: 14, lineHeight: 1.2 } }}
                                style={{ width: 380 }}
                            /> */}
                            <ReactQuill
                                        defaultValue={item.title}
                                        modules={richEditorSettings}
                                        theme={'snow'}
                                        style={{ marginRight: '8px' }}
                                        onChange={val => onAchievementChange(val, index)}
                                    />
                            <AddCircleIcon
                                onClick={event => onAddAchievement(event, index)}
                                className='add-item-icon'
                            ></AddCircleIcon>
                            <DeleteForeverIcon
                                onClick={event => onDeleteAchievement(event, index)}
                                className={`delete-item-icon ${index === 0 ? 'd-none' : ''}`}
                            ></DeleteForeverIcon>
                        </div>
                    );
                })}
            </div>
        </div>,
        document.getElementById('editorPortal')
    );
};

export default AchievementEditor;
