import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';

import { LinearProgress, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SkillsWithProgressEditor from './SkillsWithProgressEditor';

import './SkillsWithProgress.css';

const SkillsWithProgress = props => {
    const [open, setOpen] = useState(false);
    console.log('calling SkillsWith Progress Bar', open);

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);

    const dispatch = useDispatch();
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

    const openEditor = () => {
        dispatch(updateOpenEditorName(props.componentItem.name));
        setOpen(true);
    };

    return (
        <div className='resume-section resume-section-skill-with-progress'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
                <span className='edit-component-icon'>
                    <EditIcon titleAccess='Edit' onClick={openEditor} />
                </span>
            </div>
            {widgetData.items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={widgetData.showProficiencyProgress ? 'skill-wrapper' : 'skill-wrapper min-margin'}
                    >
                        <div className='skill-header'>
                            <div className='skill-title'>{item.title}</div>
                            <div className={`skill-percentage ${widgetData.showProficiency ? '' : 'd-none'}`}>
                                {' '}
                                - {item.proficiency}
                            </div>
                        </div>
                        <div className='skill-progress'>
                            <Box sx={{ color: widgetData.proficiencyProgressColor }}>
                                <LinearProgress
                                    color='inherit'
                                    className={widgetData.showProficiencyProgress ? '' : 'd-none'}
                                    variant='determinate'
                                    value={Number(item.proficiency)}
                                />
                            </Box>
                        </div>
                    </div>
                );
            })}

            {openEditorName === props.componentItem.name ? (
                <SkillsWithProgressEditor
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

export default React.memo(SkillsWithProgress);
