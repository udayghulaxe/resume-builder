import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { TextField, Button, MenuItem, Grid } from '@mui/material';

import { updateResumeDataReducer, updateOpenEditorName } from '../../reducers/resumeDataSlice';

const DividerEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData);
    const dispatch = useDispatch();

    const onSave = event => {
        dispatch(
            updateResumeDataReducer({ name: props.componentName, column: props.componentColumn, data: editorData })
        );
        closeEditor();
    };

    const closeEditor = () => {
        dispatch(updateOpenEditorName(null));
        props.setOpen(false);
    };

    const onStyleChange = (style, value) => {
        if (style.type === 'number') {
            if (!value) {
                value = 0;
            }
            if (value >= 0 && value <= 100) {
                updateStyle(style, value);
            }
        } else {
            updateStyle(style, value);
        }
    };

    function updateStyle(s, value) {
        const widgetData = JSON.parse(JSON.stringify(editorData));
        const style = widgetData.styles.find(style => style.rule === s.rule);
        style.value = value;
        setEditorData(widgetData);
        props.setWidgetData(widgetData);
    }

    return ReactDOM.createPortal(
        <div className='editor-wrap'>
            <div className='editor-section-header'>
                <Button variant='contained' size='small' onClick={onSave}>
                    Save Changes
                </Button>
                <Button variant='outlined' size='small' onClick={closeEditor}>
                    Close
                </Button>
            </div>
            <div className='editor-heading-wrap'>
                <TextField
                    fullWidth
                    label='Title'
                    readOnly
                    autoComplete='off'
                    variant='standard'
                    value={editorData.title}
                />
            </div>
            <div className='editor-options-wrap'>
                <Grid container spacing={1}>
                    {editorData.styles.map(style => {
                        return (
                            <Grid item xs={12} md={6} key={style.rule}>
                                <TextField
                                    type={style.type}
                                    select={style.type === 'select'}
                                    label={style.label + (style.unit ? ` (${style.unit})` : '')}
                                    value={style.value}
                                    margin='normal'
                                    size='small'
                                    fullWidth
                                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                                    onChange={event => onStyleChange(style, event.target.value)}
                                >
                                    {style.type === 'select' &&
                                        style.options.map(option => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </div>,
        document.getElementById('editorPortal')
    );
};

export default DividerEditor;
