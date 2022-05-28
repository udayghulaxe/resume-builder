import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Divider, Box, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateResumeDataByResumeId, updateOpenEditorName } from '../../reducers/resumeDataSlice';
import { useParams } from 'react-router-dom';

import { richEditorSettings } from '../../globals.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const SocialEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData);
    const { resumeDataReducer } = useSelector(state => state);
    const { resumeId } = useParams();
    const dispatch = useDispatch();

    const onWidgetDataChange = (key, newValue) => {
        const newData = { ...editorData, [key]: newValue };
        setEditorData(newData);
        props.setWidgetData(newData);
    };

    const onSave = event => {
        const newData = { ...editorData };
        const data = JSON.parse(JSON.stringify(resumeDataReducer.resumeData));
        data[props.componentColumn].filter(item => item.name === props.componentName)[0].componentData =
        newData;

        dispatch(updateResumeDataByResumeId({data, resumeId}));
        closeEditor();
    };

    const onTitleChange = event => {
        const newVal = event.target.value;
        onWidgetDataChange('title', newVal);
    };

    const onHideTitle = event => {
        onWidgetDataChange('hideTitle', event.target.checked);
    }

    const onFieldChange = (val, index, property) => {
        const newValue = val;
        let newprofessionalSummaryItems = [...editorData.items];
        newprofessionalSummaryItems[index] = {
            ...newprofessionalSummaryItems[index],
            [property]: newValue,
        };
        onWidgetDataChange('items', newprofessionalSummaryItems);
    };

    const closeEditor = () => {
        dispatch(updateOpenEditorName(null));
        props.setOpen(false);
    };

    return ReactDOM.createPortal(
        <div className='editor-wrap'>
            <div className='editor-section-header'>
                <Button
                    variant='contained'
                    size='small'
                    onClick={onSave}
                    disabled={!editorData.items.filter(item => item.summary.length > 0).length}
                >
                    Save Changes
                </Button>
                <Button variant='outlined' size='small' onClick={onSave}>
                    Close
                </Button>
            </div>
            <div className='editor-heading-wrap'>
                <TextField
                    fullWidth
                    label='Title'
                    autoComplete='off'
                    onChange={onTitleChange}
                    value={editorData.title}
                    variant='standard'
                />
            </div>

            <div className='editor-items-wrap'>
                <div>
                    Hide Title:{' '}
                    <Switch
                        label='Hide Title'
                        onChange={event => onHideTitle(event)}
                        checked={editorData.hideTitle}
                    />
                </div>
                {editorData.items.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='editor-item'>
                                <div>
                                    <ReactQuill
                                        defaultValue={item.summary}
                                        modules={richEditorSettings}
                                        theme={'snow'}
                                        onChange={val => onFieldChange(val, index, 'summary')}
                                    />
                                </div>
                            </div>
                            <Box sx={{ height: 20 }}></Box>
                            <Divider></Divider>
                            <Box sx={{ height: 20 }}></Box>
                        </div>
                    );
                })}
            </div>
        </div>,
        document.getElementById('editorPortal')
    );
};

export default SocialEditor;
