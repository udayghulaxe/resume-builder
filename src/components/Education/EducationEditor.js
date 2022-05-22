import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { TextField, Button, Divider, Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateResumeDataReducer, updateOpenEditorName } from '../../reducers/resumeDataSlice'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const EducationEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData)
    const dispatch = useDispatch()

    const onWidgetDataChange = (key, newValue) => {
        const newData = { ...editorData, [key]: newValue }
        setEditorData(newData)
        props.setWidgetData(newData)
    }

    const onTitleChange = event => {
        const newVal = event.target.value
        onWidgetDataChange('title', newVal)
    }

    const onEducationTitleChange = (event, index) => {
        const newTitle = event.target.value
        let newEducationItems = [...editorData.items]
        newEducationItems[index] = { ...newEducationItems[index], title: newTitle }
        onWidgetDataChange('items', newEducationItems)
    }

    const onUniversityChange = (event, index) => {
        const newUniversity = event.target.value
        let newEducationItems = [...editorData.items]
        newEducationItems[index] = { ...newEducationItems[index], university: newUniversity }
        onWidgetDataChange('items', newEducationItems)
    }

    const onDateChange = (event, index) => {
        const newDate = event.target.value
        let newEducationItems = [...editorData.items]
        newEducationItems[index] = { ...newEducationItems[index], date: newDate }
        onWidgetDataChange('items', newEducationItems)
    }

    const onGpaChange = (event, index) => {
        const newGPA = event.target.value
        let newEducationItems = [...editorData.items]
        newEducationItems[index] = { ...newEducationItems[index], gpa: newGPA }
        onWidgetDataChange('items', newEducationItems)
    }

    const onAddEducation = (event, index) => {
        let newEducationItems = [...editorData.items]
        newEducationItems.splice(index + 1, 0, { title: '', university: '', date: '', gpa: '' })
        onWidgetDataChange('items', newEducationItems)
    }
    const onDeleteEducation = (event, index) => {
        let newEducationItems = [...editorData.items]
        newEducationItems.splice(index, 1)
        onWidgetDataChange('items', newEducationItems)
    }

    const onSave = event => {
        const newData = { ...editorData, items: editorData.items.filter((item, index) => item.title.length > 0) }
        dispatch(updateResumeDataReducer({ name: props.componentName, column: props.componentColumn, data: newData }))
        closeEditor()
        console.log(editorData)
    }

    const closeEditor = () => {
        dispatch(updateOpenEditorName(null))
        props.setOpen(false)
    }

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
            <div className='editor-items-wrap'>
                {editorData.items.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='editor-item'>
                                <div>
                                    <TextField
                                        label='Degree & Field of Study'
                                        sx={{ mb: 1, mt: 1, mr: 1 }}
                                        onChange={event => onEducationTitleChange(event, index)}
                                        value={item.title}
                                        data-key={index}
                                        inputProps={{ style: { fontSize: 14 } }}
                                        size='small'
                                    />
                                    <TextField
                                        label='University or School'
                                        sx={{ mb: 1, mt: 1, mr: 1 }}
                                        onChange={event => onUniversityChange(event, index)}
                                        value={item.university}
                                        data-key={index}
                                        inputProps={{ style: { fontSize: 14 } }}
                                        size='small'
                                    />
                                    <TextField
                                        label='Date (From - To)'
                                        sx={{ mb: 1, mt: 1, mr: 1 }}
                                        onChange={event => onDateChange(event, index)}
                                        value={item.date}
                                        data-key={index}
                                        placeholder='YYYY - YYYY'
                                        inputProps={{ style: { fontSize: 14 } }}
                                        size='small'
                                    />
                                    <TextField
                                        label='Percentage or CGPA'
                                        sx={{ mb: 1, mt: 1, mr: 1 }}
                                        onChange={event => onGpaChange(event, index)}
                                        value={item.gpa}
                                        data-key={index}
                                        inputProps={{ style: { fontSize: 14 } }}
                                        size='small'
                                    />
                                </div>
                                <AddCircleIcon
                                    onClick={event => onAddEducation(event, index)}
                                    className='add-item-icon'
                                ></AddCircleIcon>
                                <DeleteForeverIcon
                                    onClick={event => onDeleteEducation(event, index)}
                                    className={`delete-item-icon ${index === 0 ? 'd-none' : ''}`}
                                ></DeleteForeverIcon>
                            </div>
                            <Box sx={{ height: 20 }}></Box>
                            <Divider></Divider>
                            <Box sx={{ height: 20 }}></Box>
                        </div>
                    )
                })}
            </div>
        </div>,
        document.getElementById('editorPortal')
    )
}

export default EducationEditor
