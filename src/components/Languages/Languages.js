import React, { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import LanguagesEditor from "./LanguagesEditor";

import "./Languages.css";

const Languages = (props) => {
  const [open, setOpen] = useState(false);
  console.log('calling languages', open);
  
  const  openEditor = () => {
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
          <span>{props.componentItem.componentData.title}</span>
          <span className="edit-component-icon">
              <EditIcon onClick={openEditor}/>
          </span>
      </div>
      {props.componentItem.componentData.items.map((item, index) => {
        return (
          <div key={index} className="language-wrapper">
          <div className="language-header">
              <div className="language-title">{item.language}</div>
              <div className={`language-level ${props.componentItem.componentData.showProficiency ? '' : 'd-none'}`}> - {item.proficiency}</div>
          </div>
          <div className="language-progress">
            <LinearProgress className={props.componentItem.componentData.showProficiencyProgress ? '' : 'd-none'} variant="determinate" value={ getProgressFromProficiency(item.proficiency) } />
          </div>
        </div>
        );
      })}


      <LanguagesEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />
    </div>
  );
};

export default  React.memo(Languages);
