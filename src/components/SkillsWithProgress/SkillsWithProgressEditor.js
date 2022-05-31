import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Slider, Switch, Box } from '@mui/material';
import { GithubPicker } from 'react-color';
import { colors } from '../../globals.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateResumeDataByResumeId, updateOpenEditorName } from '../../reducers/resumeDataSlice';
import { useParams } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const SkillsWithProgressEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData);
    const { resumeDataReducer } = useSelector(state => state);
    const [toggleColor, setToggleColor] = useState(false);
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

    const onShowProficiencyChange = event => {
        onWidgetDataChange('showProficiency', event.target.checked);
    };

    const onShowProficiencyProgressChange = event => {
        onWidgetDataChange('showProficiencyProgress', event.target.checked);
    };

    const changeProficiencyProgressColor = color => {
        onWidgetDataChange('proficiencyProgressColor', color.hex);
    };

    const onskillsProgressItemsChange = (event, index) => {
        let newSkillsProgressItems = [...editorData.items];
        newSkillsProgressItems[index] = { title: event.target.value, proficiency: 0 };
        onWidgetDataChange('items', newSkillsProgressItems);
    };

    const onAddSkills = (event, index) => {
        let newSkillsProgressItems = [...editorData.items];
        newSkillsProgressItems.splice(index + 1, 0, { title: '', proficiency: 0 });
        onWidgetDataChange('items', newSkillsProgressItems);
    };
    const onDeleteSkills = (event, index) => {
        let newSkillsProgressItems = [...editorData.items];
        newSkillsProgressItems.splice(index, 1);
        onWidgetDataChange('items', newSkillsProgressItems);
    };

    const onProficiencyChange = (event, index) => {
        let newSkillsProgressItems = [...editorData.items];
        newSkillsProgressItems[index] = { title: newSkillsProgressItems[index].title, proficiency: event.target.value };
        onWidgetDataChange('items', newSkillsProgressItems);
    };

    const onSave = event => {
        const newData = { ...editorData, items: editorData.items.filter((item, index) => item.title.length > 0) };
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
            <div className='editor-heading-wrap'>
                <div className='editor-section-header'>
                    <Button
                        variant='contained'
                        size='small'
                        onClick={onSave}
                        disabled={!editorData.items.filter(item => item.title.length > 0).length}
                    >
                        Save Changes
                    </Button>
                    <Button variant='outlined' size='small' onClick={closeEditor}>
                        Close
                    </Button>
                </div>
                <TextField
                    fullWidth
                    label='Title'
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
                                onChange={event => onskillsProgressItemsChange(event, index)}
                                value={item.title}
                                data-key={index}
                                size='small'
                            />
                            <div className='progress-wrap'>
                                {item.proficiency}
                                <Slider
                                    aria-label='Proficiency'
                                    value={Number(item.proficiency)}
                                    step={10}
                                    marks
                                    min={0}
                                    max={100}
                                    onChange={event => onProficiencyChange(event, index)}
                                />
                            </div>
                            <AddCircleIcon
                                onClick={event => onAddSkills(event, index)}
                                className='add-item-icon'
                            ></AddCircleIcon>
                            <DeleteForeverIcon
                                onClick={event => onDeleteSkills(event, index)}
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

export default SkillsWithProgressEditor;
