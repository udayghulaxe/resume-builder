import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Slider, Switch, Box } from '@mui/material';
import { GithubPicker } from 'react-color';
import { colors } from '../../globals.js';
import { useDispatch } from 'react-redux';
import { updateResumeDataReducer, updateOpenEditorName } from '../../reducers/resumeDataSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const LanguagesEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData);
    const [toggleColor, setToggleColor] = useState(false);

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

    const onShowProficiencyChange = event => {
        onWidgetDataChange('showProficiency', event.target.checked);
    };

    const onShowProficiencyProgressChange = event => {
        onWidgetDataChange('showProficiencyProgress', event.target.checked);
    };

    const onLanguageChange = (event, index) => {
        let languages = [...editorData.items];
        languages[index] = { language: event.target.value, proficiency: 'Beginner' };
        onWidgetDataChange('items', languages);
    };

    const onAddLanguage = (event, index) => {
        let languages = [...editorData.items];
        languages.splice(index + 1, 0, { language: '' });
        onWidgetDataChange('items', languages);
    };
    const onDeleteLanguage = (event, index) => {
        let languages = [...editorData.items];
        languages.splice(index, 1);
        onWidgetDataChange('items', languages);
    };

    const changeProficiencyProgressColor = color => {
        console.log(color);
        onWidgetDataChange('proficiencyProgressColor', color.hex);
    };

    const onProficiencyChange = (event, index) => {
        let languages = [...editorData.items];
        switch (event.target.value) {
            case 25:
                languages[index] = { language: languages[index].language, proficiency: 'Beginner' };
                break;

            case 50:
                languages[index] = { language: languages[index].language, proficiency: 'Intermediate' };
                break;

            case 75:
                languages[index] = { language: languages[index].language, proficiency: 'Proficient' };
                break;

            case 100:
                languages[index] = { language: languages[index].language, proficiency: 'Native' };
                break;
            default:
                languages[index] = { language: languages[index].language, proficiency: 'Beginner' };
                break;
        }
        onWidgetDataChange('items', languages);
    };

    const onSave = event => {
        const newData = { ...editorData };
        dispatch(updateResumeDataReducer({ name: props.componentName, column: props.componentColumn, data: newData }));
        closeEditor();
    };

    const closeEditor = () => {
        dispatch(updateOpenEditorName(null));
        props.setOpen(false);
    };

    const getProficiencyValue = prof => {
        let val = 25;
        switch (prof) {
            case 'Beginner':
                val = 25;
                break;

            case 'Intermediate':
                val = 50;
                break;

            case 'Proficient':
                val = 75;
                break;

            case 'Native':
                val = 100;
                break;
            default:
                val = 25;
                break;
        }
        return val;
    };

    return ReactDOM.createPortal(
        <div className='editor-wrap'>
            <div className='editor-section-header'>
                <Button
                    variant='contained'
                    size='small'
                    onClick={onSave}
                    disabled={!editorData.items.filter(item => item.language.length > 0).length}
                >
                    Save Changes
                </Button>
                <Button variant='outlined' size='small' onClick={closeEditor}>
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
                    Show Proficiency:{' '}
                    <Switch
                        label='Proficiency'
                        onChange={event => onShowProficiencyChange(event)}
                        checked={editorData.showProficiency}
                    />
                </div>
                <div>
                    Show Proficiency Progress:{' '}
                    <Switch
                        label='Proficiency Progress'
                        onChange={event => onShowProficiencyProgressChange(event)}
                        checked={editorData.showProficiencyProgress}
                    />
                </div>
                <Box sx={{ marginTop: '10px', marginBottom: '20px' }}>
                    Proficiency Progress Color:{' '}
                    <Box
                        className='resume-setting-selected-color'
                        onClick={() => {
                            setToggleColor(!toggleColor);
                        }}
                        sx={{ backgroundColor: editorData.proficiencyProgressColor }}
                    ></Box>
                    <div className={`resume-setting-item-body ${toggleColor === true ? '' : 'd-none'}`}>
                        <GithubPicker
                            color={editorData.proficiencyProgressColor}
                            onChangeComplete={changeProficiencyProgressColor}
                            colors={colors}
                            triangle='hide'
                        />
                    </div>
                </Box>
            </div>

            <div className='editor-items-wrap'>
                {editorData.items.map((item, index) => {
                    return (
                        <div className='editor-item' key={index}>
                            <TextField
                                label={'Option ' + (index + 1)}
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onLanguageChange(event, index)}
                                value={item.language}
                                data-key={index}
                                size='small'
                            />
                            <div className='progress-wrap'>
                                {item.proficiency}
                                <Slider
                                    aria-label='Proficiency'
                                    value={getProficiencyValue(item.proficiency)}
                                    step={25}
                                    marks
                                    min={25}
                                    max={100}
                                    onChange={event => onProficiencyChange(event, index)}
                                />
                            </div>
                            <AddCircleIcon
                                onClick={event => onAddLanguage(event, index)}
                                className='add-item-icon'
                            ></AddCircleIcon>
                            <DeleteForeverIcon
                                onClick={event => onDeleteLanguage(event, index)}
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

export default LanguagesEditor;
