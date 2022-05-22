import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { TextField, Button, Divider, Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateResumeDataReducer, updateOpenEditorName } from '../../reducers/resumeDataSlice'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const SocialEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData)
    const dispatch = useDispatch()

    const onWidgetDataChange = (key, newValue) => {
        const newData = { ...editorData, [key]: newValue }
        setEditorData(newData)
        props.setWidgetData(newData)
    }

    const onSave = event => {
        const newData = { ...editorData }
        dispatch(
            updateResumeDataReducer({
                name: props.componentName,
                column: props.componentColumn,
                data: newData,
            })
        )
        closeEditor()
        console.log(editorData)
    }

    const onTitleChange = event => {
        const newVal = event.target.value
        onWidgetDataChange('title', newVal)
    }

    const onFieldChange = (event, index, property) => {
        const newValue = event.target.value
        let newSocialItems = [...editorData.items]
        newSocialItems[index] = {
            ...newSocialItems[index],
            [property]: newValue,
        }
        onWidgetDataChange('items', newSocialItems)
    }

    const onAddSocial = (event, index) => {
        let newSocialItems = [...editorData.items]
        newSocialItems.splice(index + 1, 0, {
            socialPlatform: '',
            username: '',
        })
        onWidgetDataChange('items', newSocialItems)
    }

    const onDeleteExperience = (event, index) => {
        let newSocialItems = [...editorData.items]
        newSocialItems.splice(index, 1)
        onWidgetDataChange('items', newSocialItems)
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
                    disabled={!editorData.items.filter(item => item.socialPlatform.length > 0).length}
                >
                    Save Changes
                </Button>
                <Button variant='outlined' size='small' onClick={closeEditor}>
                    Close
                </Button>
            </div>
            <div className='editor-heading-wrap'>
                <TextField
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
                                        label='Social Platform'
                                        sx={{ mb: 1, mt: 1, mr: 1 }}
                                        onChange={event => onFieldChange(event, index, 'socialPlatform')}
                                        value={item.socialPlatform}
                                        inputProps={{ style: { fontSize: 14 } }}
                                        size='small'
                                    />

                                    <TextField
                                        label='Username or URL'
                                        sx={{ mb: 1, mt: 1, mr: 1 }}
                                        onChange={event => onFieldChange(event, index, 'username')}
                                        value={item.username}
                                        inputProps={{ style: { fontSize: 14 } }}
                                        size='small'
                                    />
                                </div>
                                <AddCircleIcon
                                    onClick={event => onAddSocial(event, index)}
                                    className='add-item-icon'
                                ></AddCircleIcon>
                                <DeleteForeverIcon
                                    onClick={event => onDeleteExperience(event, index)}
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

export default SocialEditor
