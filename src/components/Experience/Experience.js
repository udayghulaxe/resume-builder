import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import EditIcon from '@mui/icons-material/Edit';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import ExperienceEditor from '../Experience/ExperienceEditor';

import './Experience.css';

const Experience = props => {
    const [open, setOpen] = useState(false);

    console.log('calling experience', open);
    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);

    const dispatch = useDispatch();
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

    const openEditor = () => {
        dispatch(updateOpenEditorName(props.componentItem.name));
        setOpen(true);
    };

    const experienceHTML = (
        <div className='experience-item-wrap'>
            {widgetData.items.map((item, index) => {
                return (
                    <div key={index} className='experience-item'>
                        <span className='experience-title full-width-field resume-section-subtitle'>
                            {item.experienceTitle}
                        </span>
                        <div className='section-meta'>
                            {item.company && (
                                <div className='section-meta-item'>
                                    <BusinessIcon fontSize='15'></BusinessIcon>
                                    <Box component='span' sx={{ pl: 1 }}>
                                        {item.company}
                                    </Box>
                                </div>
                            )}
                            {item.date && (
                                <div className='section-meta-item'>
                                    <CalendarTodayIcon fontSize='15'></CalendarTodayIcon>
                                    <Box component='span' sx={{ pl: 1 }}>
                                        {item.date}
                                    </Box>
                                </div>
                            )}
                            {item.location && (
                                <div className='section-meta-item'>
                                    <LocationOnIcon fontSize='15'></LocationOnIcon>
                                    <Box component='span' sx={{ pl: 1 }}>
                                        {item.location}
                                    </Box>
                                </div>
                            )}
                        </div>
                        <div
                            className='experience-summary rich-text-div'
                            dangerouslySetInnerHTML={{ __html: item.experienceSummary }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );

    const experienceTimelineHTML = (
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
                                {item.experienceSummary.length > 0 && item.experienceSummary !== '<p><br></p>' && (
                                    <TimelineConnector />
                                )}
                            </TimelineSeparator>
                            <TimelineContent>
                                <span className='experience-title full-width-field resume-section-subtitle'>
                                    {item.experienceTitle}
                                </span>
                                {item.company && (
                                    <div className='resume-section-body'>
                                        <strong>
                                            {' '}
                                            {item.company}
                                            {item.location && ','} {item.location}
                                        </strong>
                                    </div>
                                )}
                                <div
                                    className='experience-summary rich-text-div resume-section-body'
                                    dangerouslySetInnerHTML={{ __html: item.experienceSummary }}
                                ></div>
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </div>
    );

    return (
        <div className='resume-section resume-section-experience'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
                <span className='edit-component-icon'>
                    <EditIcon titleAccess='Edit' onClick={openEditor} />
                </span>
            </div>
            {/* Toggle timeline and normal widget */}
            {widgetData.timelineFormat ? experienceTimelineHTML : experienceHTML}
            {/* OPEN the editor */}
            {openEditorName === props.componentItem.name ? (
                <ExperienceEditor
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

export default React.memo(Experience);
