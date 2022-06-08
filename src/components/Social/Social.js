import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SocialEditor from './SocialEditor';

import './Social.css';
const Social = props => {
    console.log('calling Social');

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

    return (
        <div className='resume-section resume-section-Social'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
            </div>

            <div className='social-item-wrap'>
                {widgetData.items.map((item, index) => {
                    return (
                        <div className='social-item' key={index}>
                            <div className='social-platform resume-section-subtitle'>{item.socialPlatform}</div>
                            <div className='social-username'>{item.username}</div>
                        </div>
                    );
                })}
            </div>

            {openEditorName === props.componentItem.name ? (
                <SocialEditor
                    setWidgetData={setWidgetData}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(Social);
