import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfessionalSummaryEditor from './ProfessionalSummaryEditor';

import './ProfessionalSummary.css';

const ProfessionalSummary = props => {
    console.log('calling ProfessionalSummary');

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);
    return (
        <div className='resume-section resume-section-professional-summary'>
            <div className={`resume-section-title ${widgetData.hideTitle && props.componentColumn !== 'componentLibrary' ? 'd-none': ''}`}>
                <span>{widgetData.title}</span>
            </div>

            <div className='professional-summary-item-wrap'>
                {widgetData.items.map((item, index) => {
                    return (
                        <div className='professional-summary-item' key={index}>
                            <span
                                className='professional-summary-summary-body rich-text-div'
                                dangerouslySetInnerHTML={{ __html: item.summary }}
                            ></span>
                        </div>
                    );
                })}
            </div>

            {openEditorName === props.componentItem.name ? (
                <ProfessionalSummaryEditor
                    setWidgetData={setWidgetData}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(ProfessionalSummary);
