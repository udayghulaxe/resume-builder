import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import StarIcon from '@mui/icons-material/Star';
import AchievementEditor from './AchievementEditor';

import './Achievement.css';

const Achievement = props => {
    console.log('calling achievment');
    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

    return (
        <div className='resume-section resume-section-achievement'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
            </div>

            <div className='achievement-item-wrap'>
                {widgetData.items.map((item, index) => {
                    return (
                        <div key={`achievement-${index}`} className='achievement-item'>
                            <span className={`achievement-icon ${widgetData.showIcon ? '' : 'd-none'}`}>
                                <StarIcon />
                            </span>
                            <div
                                className='achievement-summary rich-text-div resume-section-body'
                                dangerouslySetInnerHTML={{ __html: item.title }}
                            ></div>
                            {/* <span className='achievement-summary'>{item.title}</span> */}
                        </div>
                    );
                })}
            </div>

            {openEditorName === props.componentItem.name ? (
                <AchievementEditor
                    setWidgetData={setWidgetData}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(Achievement);
