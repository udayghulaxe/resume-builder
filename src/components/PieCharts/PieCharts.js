import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';
import { PieChart } from 'react-minimal-pie-chart';
import PieChartsEditor from './PieChartsEditor';
import EditIcon from '@mui/icons-material/Edit';

import './PieCharts.css';

const PieCharts = props => {
    const [open, setOpen] = useState(false);
    console.log('calling pie chart', open);

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
    const dispatch = useDispatch();

    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

    const openEditor = () => {
        dispatch(updateOpenEditorName(props.componentItem.name));
        setOpen(true);
    };

    return (
        <div className='resume-section resume-section-piechart'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
                <span className='edit-component-icon'>
                    <EditIcon titleAccess='Edit' onClick={openEditor} />
                </span>
            </div>
            <div style={{ height: '150px', marginTop: '20px' }}>
                <PieChart
                    data={widgetData.items}
                    lineWidth={ widgetData.pieChart ? 100 : 25}
                    paddingAngle={widgetData.pieChart ? 0 : 5}
                    label={({ dataEntry }) => dataEntry.title}
                    labelStyle={index => ({
                        fill: '#000000',
                        fontSize: '0.55em',
                        fontFamily: 'sans-serif',
                    })}
                    radius={42}
                    labelPosition={112}
                    background={widgetData.chartColor === '#ffffff' ? '#000000' : 'transparent'}
                />
            </div>

            {openEditorName === props.componentItem.name ? (
                <PieChartsEditor
                    setWidgetData={setWidgetData}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(PieCharts);
