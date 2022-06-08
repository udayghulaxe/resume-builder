import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import EducationEditor from './EducationEditor';

import './Education.css';

const Education = props => {
    console.log('calling education');

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

    const educationHTML = (
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
    );

    const educationTimelineHTML = (
        <div className='experience-item-wrap'>
            <Timeline position='right' sx={{ paddingLeft: '0', marginTop: '0', paddingTop: '0' }}>
                {widgetData.items.map((item, index) => {
                    return (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{ paddingLeft: '0', paddingRight: '2px', textAlign: 'left', flex: 0.3 }}
                            >
                                {item.date && (
                                    <div className='resume-section-body'>
                                        {/* <CalendarTodayIcon fontSize='15'></CalendarTodayIcon> */}
                                        <Box component='span' sx={{ pl: 0 }}>
                                            {item.date}
                                        </Box>
                                    </div>
                                )}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{ padding: '2px' }} />
                                {item.title.length > 0 && item.title !== '<p><br></p>' && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <span className='experience-title full-width-field resume-section-subtitle'>
                                    {item.title}
                                </span>
                                {item.university && (
                                    <div className='resume-section-body'>
                                        <strong> {item.university}</strong>
                                    </div>
                                )}
                                {item.gpa && (
                                    <div className='resume-section-body'>
                                        {item.gpa}
                                    </div>
                                )}
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </div>
    );

    return (
        <div className='resume-section resume-section-education'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
            </div>
            {/* Toggle timeline and normal widget */}
            {widgetData.timelineFormat ? educationTimelineHTML : educationHTML}
            {/* OPEN the editor */}
            {openEditorName === props.componentItem.name ? (
                <EducationEditor
                    setWidgetData={setWidgetData}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(Education);
