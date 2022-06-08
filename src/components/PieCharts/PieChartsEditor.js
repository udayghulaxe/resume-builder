import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Switch, Slider, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateResumeDataByResumeId, updateOpenEditorName } from '../../reducers/resumeDataSlice';
import { useParams } from 'react-router-dom';
import { GithubPicker } from 'react-color';
import { colors } from '../../globals.js';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const PieChartsEditor = props => {
    const [editorData, setEditorData] = useState(props.editorData);
    const { resumeDataReducer } = useSelector(state => state);
    const [toggleColor, setToggleColor] = useState(false);
    const { resumeId } = useParams();
    const dispatch = useDispatch();

    const onWidgetDataChange = (key, newValue) => {
        const newData = { ...editorData, [key]: newValue };
        setEditorData(newData);
        props.setWidgetData(newData);
        console.log(newData);
    };

    const onTitleChange = event => {
        const newVal = event.target.value;
        onWidgetDataChange('title', newVal);
    };

    // const onRoundedChange = event => {
    //     onWidgetDataChange('rounded', event.target.checked);
    // };

    const onChartOptionsChange = (event, index) => {
        let chartOptions = [...editorData.items];
        chartOptions[index] = {
            title: event.target.value,
            value: chartOptions[index].value,
            color: chartOptions[index].color,
        };
        onWidgetDataChange('items', chartOptions);
    };

    const onChartOptionValueChange = (event, index) => {
        let chartOptions = [...editorData.items];
        chartOptions[index] = {
            title: chartOptions[index].title,
            value: event.target.value,
            color: chartOptions[index].color,
        };
        onWidgetDataChange('items', chartOptions);
    };

    const onAddChartOption = (event, index) => {
        let chartOptions = [...editorData.items];
        chartOptions.splice(index + 1, 0, { title: '', value: 10, color: '#ff0000' });
        onWidgetDataChange('items', chartOptions);
    };
    const onDeleteChartOption = (event, index) => {
        let chartOptions = [...editorData.items];
        chartOptions.splice(index, 1);
        onWidgetDataChange('items', chartOptions);
    };

    const onChartTypeChange = event => {
        onWidgetDataChange('pieChart', event.target.checked);
    };

    const changeChartColor = (color) => {
        updateChartColor(color);
    };

    const updateChartColor = colorOption => {
        let chartOptions = JSON.parse(JSON.stringify(editorData.items));
        chartOptions.sort((a,b) => b.value - a.value);
        chartOptions.forEach((chartOption, index) => {
            chartOption.color = `rgb(${colorOption.rgb.r}, ${colorOption.rgb.g}, ${colorOption.rgb.b}, ${1 - (index / 10)})`;
        });
       
        props.setWidgetData({ ...editorData, items: chartOptions, chartColor: colorOption.hex });
        setEditorData({ ...editorData, items: chartOptions, chartColor: colorOption.hex });
        setToggleColor(false);
    }

    const onSave = event => {
        const newData = { ...editorData };
        const data = JSON.parse(JSON.stringify(resumeDataReducer.resumeData));
        data[props.componentColumn].filter(item => item.name === props.componentName)[0].componentData = newData;

        dispatch(updateResumeDataByResumeId({ data, resumeId }));
        closeEditor();
    };

    const closeEditor = () => {
        dispatch(updateOpenEditorName(null));
    };

    return ReactDOM.createPortal(
        <div className='editor-wrap'>
            <div className='editor-section-header'>
                <Button
                    variant='contained'
                    size='small'
                    onClick={onSave}
                    disabled={!editorData.items.filter(item => item.title.length > 0).length}
                >
                    Save Changes
                </Button>
                <Button variant='outlined' size='small' onClick={onSave}>
                    Close
                </Button>
            </div>
            <div className='editor-heading-wrap'>
                <TextField
                    label='Title'
                    fullWidth
                    autoComplete='off'
                    onChange={onTitleChange}
                    value={editorData.title}
                    variant='standard'
                />
            </div>

            <div className='editor-options-wrap'>
                <div>
                    Doughnut Chart{' '}
                    <Switch
                        label='Proficiency'
                        onChange={event => onChartTypeChange(event)}
                        checked={editorData.pieChart}
                    />{' '}
                    Pie Chart
                </div>
            </div>

            <Box sx={{ marginTop: '10px', marginBottom: '20px' }}>
                Chart Color:{' '}
                <Box
                    className='resume-setting-selected-color'
                    onClick={() => {
                        setToggleColor(!toggleColor);
                    }}
                    sx={{ backgroundColor: editorData.chartColor }}
                ></Box>
                <div className={`resume-setting-item-body ${toggleColor === true ? '' : 'd-none'}`}>
                    <GithubPicker
                        color={editorData.chartColor}
                        onChangeComplete={changeChartColor}
                        colors={colors}
                        triangle='hide'
                    />
                </div>
            </Box>

            <div className='editor-items-wrap'>
                {editorData.items.map((item, index) => {
                    return (
                        <div className='editor-item' key={index}>
                            <TextField
                                label={'Option ' + (index + 1)}
                                sx={{ mb: 1, mt: 1, mr: 1 }}
                                onChange={event => onChartOptionsChange(event, index)}
                                value={item.title}
                                data-key={index}
                                size='small'
                            />
                            <div className='progress-wrap'>
                                {item.value}
                                <Slider
                                    aria-label='Value'
                                    value={Number(item.value)}
                                    step={10}
                                    marks
                                    min={0}
                                    max={100}
                                    onChange={event => onChartOptionValueChange(event, index)}
                                />
                            </div>
                            <AddCircleIcon
                                onClick={event => onAddChartOption(event, index)}
                                className='add-item-icon'
                            ></AddCircleIcon>
                            <DeleteForeverIcon
                                onClick={event => onDeleteChartOption(event, index)}
                                className={`delete-item-icon ${index === 0 ? 'd-none' : ''}`}
                            ></DeleteForeverIcon>
                        </div>
                    );
                })}
            </div>
        </div>,
        document.getElementById('editorPortal')
    );
};

export default PieChartsEditor;
