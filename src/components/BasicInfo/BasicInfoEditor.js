import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateResumeDataByResumeId, updateOpenEditorName } from '../../reducers/resumeDataSlice';
import { useParams } from 'react-router-dom';

const BasicInfoEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData);
    const { resumeDataReducer } = useSelector(state => state);
    const { resumeId } = useParams();
    const dispatch = useDispatch();

    const onWidgetDataChange = (key, newValue) => {
        const newData = { ...editorData, [key]: newValue };
        setEditorData(newData);
        props.setWidgetData(newData);
    };

    const onDataChange = (event, property) => {
        onWidgetDataChange(property, event.target.value);
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
        props.setOpen(false);
    };

    return ReactDOM.createPortal(
        <div className='editor-wrap'>
            <div className='editor-section-header'>
                <Button variant='contained' size='small' onClick={onSave}>
                    Save Changes
                </Button>
                <Button variant='outlined' size='small' onClick={onSave}>
                    Close
                </Button>
            </div>
            <div className='editor-heading-wrap'>
                <TextField fullWidth readOnly autoComplete='off' value='Basic Info' variant='standard' />
            </div>
            <div className='editor-items-wrap'>
                <div className='editor-item'>
                    <div>
                        <div>
                            <TextField
                                label='Full Name'
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onDataChange(event, 'fullName')}
                                value={editorData.fullName}
                                inputProps={{ style: { fontSize: 14, width: 240 } }}
                                size='small'
                            />
                        </div>
                        <div>
                            <TextField
                                label='Current Role/Designation'
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onDataChange(event, 'currentRole')}
                                value={editorData.currentRole}
                                inputProps={{ style: { fontSize: 14, width: 240 } }}
                                size='small'
                            />
                        </div>
                        <div>
                            <TextField
                                label='Email'
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onDataChange(event, 'email')}
                                value={editorData.email}
                                inputProps={{ style: { fontSize: 14, width: 240 } }}
                                size='small'
                            />
                        </div>
                        <div>
                            <TextField
                                label='Phone'
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onDataChange(event, 'phone')}
                                value={editorData.phone}
                                inputProps={{ style: { fontSize: 14, width: 240 } }}
                                size='small'
                            />
                        </div>
                        <div>
                            <TextField
                                label='Website'
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onDataChange(event, 'website')}
                                value={editorData.website}
                                inputProps={{ style: { fontSize: 14, width: 240 } }}
                                size='small'
                            />
                        </div>
                        <div>
                            <TextField
                                label='Address'
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onDataChange(event, 'address')}
                                value={editorData.address}
                                inputProps={{ style: { fontSize: 14, width: 240 } }}
                                size='small'
                                multiline
                                rows={3}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('editorPortal')
    );
};

export default BasicInfoEditor;
