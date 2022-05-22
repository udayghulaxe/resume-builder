import React, { useState, useEffect } from 'react'
import { TextField, Button, Slider, Switch } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useDispatch } from 'react-redux'
import { updateResumeDataReducer } from '../../reducers/resumeDataSlice'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

const SkillsWithProgressEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData)
    const [firstime, setFirstTime] = useState(false)
    const [title, setTitle] = useState(editorData.title)
    const [skillsProgressItems, setSkillsProgressItems] = useState(editorData.items)
    const [showProficiency, setShowProficiency] = useState(editorData.showProficiency)
    const [showProficiencyProgress, setShowProficiencyProgress] = useState(editorData.showProficiencyProgress)
    const dispatch = useDispatch()

    const onTitleChange = event => {
        const newVal = event.target.value
        setTitle(newVal)
    }

    const onShowProficiencyChange = event => {
        setShowProficiency(event.target.checked)
    }

    const onShowProficiencyProgressChange = event => {
        setShowProficiencyProgress(event.target.checked)
    }

    const onskillsProgressItemsChange = (event, index) => {
        let newSkillsProgressItems = [...skillsProgressItems]
        newSkillsProgressItems[index] = { title: event.target.value, proficiency: 0 }
        setSkillsProgressItems(newSkillsProgressItems)
    }

    const onAddSkills = (event, index) => {
        let newSkillsProgressItems = [...skillsProgressItems]
        newSkillsProgressItems.splice(index + 1, 0, { title: '', proficiency: 0 })
        setSkillsProgressItems(newSkillsProgressItems)
    }
    const onDeleteSkills = (event, index) => {
        let newSkillsProgressItems = [...skillsProgressItems]
        newSkillsProgressItems.splice(index, 1)
        setSkillsProgressItems(newSkillsProgressItems)
    }

    const onProficiencyChange = (event, index) => {
        let newSkillsProgressItems = [...skillsProgressItems]
        newSkillsProgressItems[index] = { title: newSkillsProgressItems[index].title, proficiency: event.target.value }
        setSkillsProgressItems(newSkillsProgressItems)
    }

    const onSave = event => {
        setEditorData({
            ...editorData,
            title: title,
            showProficiency: showProficiency,
            showProficiencyProgress: showProficiencyProgress,
            items: skillsProgressItems.filter((item, index) => item.title.length > 0),
        })
        setFirstTime(true)
        closeEditor()
    }

    const closeEditor = () => {
        props.setOpen(false)
    }

    useEffect(() => {
        if (firstime) {
            dispatch(
                updateResumeDataReducer({ name: props.componentName, column: props.componentColumn, data: editorData })
            )
            setFirstTime(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editorData])

    return (
        <Dialog maxWidth='sm' fullWidth={true} open={props.open} onClose={closeEditor}>
            <DialogContent>
                <div className='editor-wrap'>
                    <div className='editor-heading-wrap'>
                        <TextField
                            fullWidth
                            autoComplete='off'
                            onChange={onTitleChange}
                            value={title}
                            variant='standard'
                        />
                    </div>

                    <div className='editor-options-wrap'>
                        <div>
                            Show Proficiency:{' '}
                            <Switch
                                label='Proficiency'
                                onChange={event => onShowProficiencyChange(event)}
                                checked={showProficiency}
                            />
                        </div>
                        <div>
                            Show Proficiency Progress:{' '}
                            <Switch
                                label='Proficiency Progress'
                                onChange={event => onShowProficiencyProgressChange(event)}
                                checked={showProficiencyProgress}
                            />
                        </div>
                    </div>

                    <div className='editor-items-wrap'>
                        {skillsProgressItems.map((item, index) => {
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
                            )
                        })}
                    </div>
                </div>
            </DialogContent>

            <DialogActions>
                <Button onClick={closeEditor}>Cancel</Button>
                <Button onClick={onSave} disabled={!skillsProgressItems.filter(item => item.title.length > 0).length}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SkillsWithProgressEditor
