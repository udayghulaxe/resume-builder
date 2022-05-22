import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';
import EditIcon from '@mui/icons-material/Edit';

import ProfessionalSummaryEditor from './ProfessionalSummaryEditor';

import './ProfessionalSummary.css';

const ProfessionalSummary = props => {
    const [open, setOpen] = useState(false);
    console.log('calling ProfessionalSummary', open);

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);

    const dispatch = useDispatch();
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

    const openEditor = () => {
        dispatch(updateOpenEditorName(props.componentItem.name));
        setOpen(true);
    };

    return (
        <div className='resume-section resume-section-professional-summary'>
            {widgetData.hideTitle && props.componentColumn !== 'componentLibrary' ? (
                <span className='edit-component-icon'>
                    <EditIcon onClick={openEditor} />
                </span>
            ) : (
                <div className='resume-section-title'>
                    <span>{widgetData.title}</span>
                    <span className='edit-component-icon'>
                        <EditIcon onClick={openEditor} />
                    </span>
                </div>
            )}

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

export default React.memo(ProfessionalSummary);
