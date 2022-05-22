import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateResumeDataReducer } from '../../reducers/resumeDataSlice'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

const BasicInfoEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData)
    const [firstime, setFirstTime] = useState(false)
    const dispatch = useDispatch()

    const onDataChange = (event, property) => {
        const newName = event.target.value
        let newEditorData = { ...editorData }
        newEditorData = { ...newEditorData, [property]: newName }
        setEditorData(newEditorData)
    }

    const onSave = event => {
        setEditorData({ ...editorData })
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
                </div>
            </DialogContent>

            <DialogActions>
                <Button onClick={closeEditor}>Cancel</Button>
                <Button onClick={onSave}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default BasicInfoEditor
