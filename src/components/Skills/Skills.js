import React, { useState } from 'react'
import { Chip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import SkillsEditor from './SkillsEditor'
import { useDispatch, useSelector } from 'react-redux'
import { updateOpenEditorName } from '../../reducers/resumeDataSlice'

import './Skills.css'
const Skills = props => {
    const [open, setOpen] = useState(false)
    const [widgetData, setWidgetData] = useState(props.componentItem.componentData)
    const dispatch = useDispatch()
    console.log('calling skills', open)

    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName)
    const openEditor = () => {
        dispatch(updateOpenEditorName(props.componentItem.name))
        setOpen(true)
    }

    return (
        <div className='resume-section resume-section-skills'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
                <span className='edit-component-icon'>
                    <EditIcon titleAccess='Edit' onClick={openEditor} />
                </span>
            </div>

            <div className='skills-item-wrap'>
                {widgetData.items.map((item, index) => {
                    return (
                        <Chip
                            key={index}
                            label={item.title}
                            className={`resume-section-body skills-chip ${widgetData.rounded ? '' : 'no-rounded'}`}
                            variant={widgetData.filled ? 'filled' : 'outlined'}
                        />
                    )
                })}
            </div>

            {openEditorName === props.componentItem.name ? (
                <SkillsEditor
                    setWidgetData={setWidgetData}
                    open={open}
                    setOpen={setOpen}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    )
}

export default React.memo(Skills)
