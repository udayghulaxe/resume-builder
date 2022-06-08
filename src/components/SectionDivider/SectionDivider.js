import React, { useState } from 'react';
import SectionDividerEditor from './SectionDividerEditor';
import { useSelector } from 'react-redux';

import './SectionDivider.css';

const SectionDivider = props => {
    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);
    
    const styles = {};
    widgetData.styles.forEach(style => {
        styles[style.rule] = style.value + style.unit;
    });

    return (
        <div className='resume-section'>

            <div className={`resume-section-title ${props.componentColumn !== 'componentLibrary' ? 'd-none' :''}`}>
                <span>{widgetData.title}</span>
            </div>

            <div className='divider-wrapper'>
                <hr style={styles} />
            </div>

            {openEditorName === props.componentItem.name ? (
                <SectionDividerEditor
                    setWidgetData={setWidgetData}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(SectionDivider);
