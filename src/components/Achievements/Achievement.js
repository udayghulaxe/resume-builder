import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOpenEditorName } from '../../reducers/resumeDataSlice'

import StarIcon from '@mui/icons-material/Star'
import EditIcon from '@mui/icons-material/Edit'
import AchievementEditor from './AchievementEditor'

import './Achievement.css'

const Achievement = props => {
    const [open, setOpen] = useState(false)
    console.log('calling achievment', open)

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData)

    const dispatch = useDispatch()
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName)

    const openEditor = () => {
        dispatch(updateOpenEditorName(props.componentItem.name))
        setOpen(true)
    }

    return (
        <div className='resume-section resume-section-achievement'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
                <span className='edit-component-icon'>
                    <EditIcon titleAccess='Edit' onClick={openEditor} />
                </span>
            </div>

            <div className='achievement-item-wrap'>
                {widgetData.items.map((item, index) => {
                    return (
                        <div key={`achievement-${index}`} className='achievement-item'>
                            <span className={`achievement-icon ${widgetData.showIcon ? '' : 'd-none'}`}>
                                <StarIcon />
                            </span>
                            <span className='achievement-summary'>{item.title}</span>
                        </div>
                    )
                })}
            </div>

            {openEditorName === props.componentItem.name ? (
                <AchievementEditor
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

export default React.memo(Achievement)
