import React, { useState, useEffect } from 'react';
import { TextField, Button, Slider, Switch } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { updateResumeDataReducer } from '../../reducers/resumeDataSlice';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


const LanguagesEditor = (props) => {
    const [editorData, setEditorData] = useState(props.editorData);
    const [firstime, setFirstTime] = useState(false);
    const [title, setTitle] = useState(editorData.title);
    const [languageItems, setLanguageItems] = useState(editorData.items);
    const [showProficiency, setShowProficiency] = useState(editorData.showProficiency);
    const [showProficiencyProgress, setShowProficiencyProgress] = useState(editorData.showProficiencyProgress);
    const dispatch = useDispatch();

    const onTitleChange = (event) => {
        const newVal = event.target.value;
        setTitle(newVal);
    }

    const onShowProficiencyChange = (event) => {
        setShowProficiency(event.target.checked);
    }

    const onShowProficiencyProgressChange = (event) => {
        setShowProficiencyProgress(event.target.checked);
    }

    const onLanguageChange = (event, index) => {
        let languages = [...languageItems];
        languages[index] = { language: event.target.value, proficiency: 'Beginner' };
        setLanguageItems(languages);
    }

    const onAddLanguage = (event, index) => {
        let languages = [...languageItems];
        languages.splice(index + 1, 0, { language: '' });
        setLanguageItems(languages);
    }
    const onDeleteLanguage = (event, index) => {
        let languages = [...languageItems];
        languages.splice(index, 1);
        setLanguageItems(languages);
    }

    const onProficiencyChange = (event, index) => {
        let languages = [...languageItems];
        switch (event.target.value) {
            case 25:
                languages[index] = {language: languages[index].language, proficiency: 'Beginner'};
                break;
        
            case 50:
                languages[index] = {language: languages[index].language, proficiency: 'Intermediate'};
                break;
            
            case 75:
                languages[index] = {language: languages[index].language, proficiency: 'Proficient'};
                break;

            case 100:
                languages[index] = {language: languages[index].language, proficiency: 'Native'};
                break;     
            default:
                languages[index] = {language: languages[index].language, proficiency: 'Beginner'};
                break;
        }
        setLanguageItems(languages);
    }

    const onSave = (event) => {
        setEditorData({ ...editorData, title: title, showProficiency: showProficiency, showProficiencyProgress: showProficiencyProgress, items: languageItems.filter((item, index) => item.language.length > 0) });
        setFirstTime(true);
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

    const getProficiencyValue = (prof) => {
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
                val = 25
                break;
        }
        return val;
    }

    return (
        <Dialog maxWidth='sm' fullWidth={true} open={props.open} onClose={closeEditor}>
            <DialogContent>
                <div className='editor-wrap'>
                    <div className='editor-heading-wrap'>
                        <TextField fullWidth autoComplete='off' onChange={onTitleChange} value={title} variant="standard" />
                    </div>

                    <div className="editor-options-wrap">
                        <div>
                            Show Proficiency: <Switch label="Proficiency" onChange={ (event) => onShowProficiencyChange(event)} checked={showProficiency} />
                        </div>
                        <div>
                            Show Proficiency Progress: <Switch label="Proficiency Progress" onChange={(event) => onShowProficiencyProgressChange(event)} checked={showProficiencyProgress}/>
                        </div>
                    </div>

                    <div className="editor-items-wrap">
                        {languageItems.map((item, index) => {
                            return (
                                <div className='editor-item' key={index}>
                                    <TextField
                                        label={"Option " + (index + 1)}
                                        sx={{ mb: 1, mt: 1, mr: 1 }}
                                        onChange={(event) => onLanguageChange(event, index)}
                                        value={item.language}
                                        data-key={index}
                                        size="small"
                                    />
                                    <div className='progress-wrap'>
                                        {item.proficiency}
                                        <Slider
                                            aria-label="Proficiency"
                                            value={ getProficiencyValue(item.proficiency) }
                                            step={25}
                                            marks
                                            min={25}
                                            max={100}
                                            onChange={(event) => onProficiencyChange(event, index)}
                                        />
                                    </div>
                                    <AddCircleIcon onClick={(event) => onAddLanguage(event, index)} className='add-item-icon'></AddCircleIcon>
                                    <DeleteForeverIcon onClick={(event) => onDeleteLanguage(event, index)} className={`delete-item-icon ${index === 0 ? 'd-none' : ''}`}></DeleteForeverIcon>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={closeEditor}>Cancel</Button>
                <Button onClick={onSave} disabled={!languageItems.filter(item => item.language.length > 0).length} >Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default LanguagesEditor;