import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';

import EducationEditor from './EducationEditor';

import './Education.css';

const Education = props => {
    const [open, setOpen] = useState(false);
    console.log('calling education', open);

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);

    const dispatch = useDispatch();
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

    const openEditor = () => {
        dispatch(updateOpenEditorName(props.componentItem.name));
        setOpen(true);
    };

    return (
        <div className='resume-section resume-section-education'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
                <span className='edit-component-icon'>
                    <EditIcon titleAccess='Edit' onClick={openEditor} />
                </span>
            </div>
            <div className='education-item-wrap'>
                {widgetData.items.map((item, index) => {
                    return (
                        <div key={index} className='education-item'>
                            <div className='resume-section-subtitle'>
                                <span className='education-title full-width-field'>{item.title}</span>
                                <span className='education-university full-width-field'>{item.university}</span>
                            </div>
                            <div className='section-meta'>
                                {item.date && (
                                    <div className='section-meta-item'>
                                        <CalendarTodayIcon className='section-meta-icon resume-section-body'></CalendarTodayIcon>
                                        <div className='resume-section-body' component='span' sx={{ pl: 0.8 }}>
                                            {item.date}
                                        </div>
                                    </div>
                                )}
                                {item.gpa && (
                                    <div className='section-meta-item'>
                                        <SchoolIcon className='section-meta-icon resume-section-body'></SchoolIcon>
                                        <div className='resume-section-body' component='span' sx={{ pl: 0.8 }}>
                                            {item.gpa}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {openEditorName === props.componentItem.name ? (
                <EducationEditor
                    setWidgetData={setWidgetData}
                    open={open}
                    setOpen={setOpen}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(Education);
