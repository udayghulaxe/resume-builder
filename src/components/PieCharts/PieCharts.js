import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PieChart } from 'react-minimal-pie-chart';
import PieChartsEditor from './PieChartsEditor';

import './PieCharts.css';

const PieCharts = props => {
    console.log('calling pie chart');

    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);


    return (
        <div className='resume-section resume-section-piechart'>
            <div className='resume-section-title'>
                <span>{widgetData.title}</span>
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
                        fontFamily: 'roboto',
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
