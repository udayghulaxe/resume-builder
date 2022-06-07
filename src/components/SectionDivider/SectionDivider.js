import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SectionDividerEditor from './SectionDividerEditor';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';

import './SectionDivider.css';

const SectionDivider = props => {
    const [open, setOpen] = useState(false);
    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);

    const dispatch = useDispatch();
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);
    const openEditor = () => {
        dispatch(updateOpenEditorName(props.componentItem.name));
        setOpen(true);
    };

    const styles = {};
    widgetData.styles.forEach(style => {
        styles[style.rule] = style.value + style.unit;
    });

    return (
        <div className='resume-section'>
            {props.componentColumn !== 'componentLibrary' ? (
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

            <div className='divider-wrapper'>
                <hr style={styles} />
            </div>

            {openEditorName === props.componentItem.name ? (
                <SectionDividerEditor
                    open={open}
                    setWidgetData={setWidgetData}
                    setOpen={setOpen}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(SectionDivider);
