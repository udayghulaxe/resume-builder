import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';

import { LinearProgress, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LanguagesEditor from "./LanguagesEditor";

import "./Languages.css";

const Languages = (props) => {
  const [open, setOpen] = useState(false);
  console.log('calling languages', open);

  const [widgetData, setWidgetData] = useState(props.componentItem.componentData);
	const dispatch = useDispatch();

  const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);
  
  const  openEditor = () => {
    dispatch(updateOpenEditorName(props.componentItem.name));
    setOpen(true);
  }

  const getProgressFromProficiency = (proficiency) => {
    let val = 25;
    switch (proficiency) {
        case 'Beginner':
            val = 25;
            break;
    
        case 'Intermediate':
            val = 50;
            break;
        
        case 'Proficient':
            val = 75;
            break;

        case 'Native':
            val = 100;
            break;     
        default:
            val = 25
            break;
    }
    return val;
  }
  return (
    <div className="resume-section resume-section-language">
      <div className="resume-section-title">
          <span>{widgetData.title}</span>
          <span className="edit-component-icon">
            <EditIcon onClick={openEditor} />
          </span>
      </div>
      {widgetData.items.map((item, index) => {
        return (
          <div key={index} className="language-wrapper">
          <div className="language-header">
              <div className="language-title">{item.language}</div>
              <div className={`language-level ${widgetData.showProficiency ? '' : 'd-none'}`}> - {item.proficiency}</div>
          </div>
          <div className="language-progress">
          <Box sx={{ color: widgetData.proficiencyProgressColor}}>
            <LinearProgress color="inherit" className={widgetData.showProficiencyProgress ? '' : 'd-none'} variant="determinate" value={ getProgressFromProficiency(item.proficiency) } />
          </Box>
          </div>
        </div>
        );
      })}


      {
        openEditorName === props.componentItem.name ? <LanguagesEditor setWidgetData={setWidgetData} open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={widgetData} /> : null
      }
    </div>
  );
};

export default  React.memo(Languages);
