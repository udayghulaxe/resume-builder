import React, { useState } from 'react';
import { Chip } from '@mui/material';
import SkillsEditor from './SkillsEditor';
import { useSelector } from 'react-redux';

import './Skills.css';
const Skills = props => {
    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
    console.log('calling skills');
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);
   

    return (
        <div className='resume-section resume-section-skills'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
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
                    );
                })}
            </div>

            {openEditorName === props.componentItem.name ? (
                <SkillsEditor
                    setWidgetData={setWidgetData}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(Skills);
