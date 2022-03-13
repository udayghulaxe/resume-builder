import React, {useState, useEffect} from 'react';
import {Chip, TextField, Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateResumeDataReducer } from '../../reducers/resumeDataSlice';

const SkillsEditor = (props) => {
    const [editorData, setEditorData] = useState(props.editorData);
    const [firstime, setFirstTime] = useState(false);
    const [title, setTitle] = useState(editorData.title);
    const dispatch = useDispatch();

    const onTitleChange = (event) => {
        const newVal = event.target.value;
        setTitle(newVal);
    }

    const onSave = (event) => {
        const t = [...editorData.items, {title: 'javaScript'}];
        setEditorData({...editorData, title: title, items: t});
        setFirstTime(true);
    }

    const closeEditor = () => {
        props.setOpen(false);
    };

    useEffect(() => {
        if (firstime) {
            dispatch(updateResumeDataReducer({name: props.componentName, column: props.componentColumn, data: editorData}));
            setFirstTime(true);
            console.log(editorData);
        }
      }, [editorData]);

    return (
        <>
            <div className='editor-heading-wrap'>
                <TextField id="editor-title" onChange={onTitleChange} value={title}  variant="standard" />
            </div>
            <div className="skills-item-wrap">
            {props.editorData.items.map((item, index) => {
                return (
                    <Chip key={index} label={item.title} className="skills-chip" variant={editorData.variant} />
                );
            })}
            </div>
            
            <Button onClick={closeEditor}>Cancel</Button>
            <Button onClick={onSave}>Save</Button>
        </>
    );
}

export default SkillsEditor;