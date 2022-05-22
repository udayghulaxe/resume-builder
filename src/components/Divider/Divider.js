import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DividerEditor from './DividerEditor';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';

import './Divider.css';

const Divider = props => {
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

    const title = (
        <div className='resume-section-title border-none'>
            <span>{widgetData.title}</span>
        </div>
    );

    return (
        <div className='resume-section'>
            {props.componentColumn === 'componentLibrary' && title}

            <span className='edit-component-icon'>
                <EditIcon titleAccess='Edit' onClick={openEditor} />
            </span>

            <div className='divider-wrapper'>
                <hr style={styles} />
            </div>

            {openEditorName === props.componentItem.name ? (
                <DividerEditor
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

export default React.memo(Divider);
