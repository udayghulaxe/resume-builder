import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';

import "./Languages.css";

const Languages = (props) => {
  return (
    <div className="resume-section resume-section-language">
      <div className="resume-section-title">
          <span>{props.componentData.title}</span>
          <span className="edit-component">
              <EditIcon/>
          </span>
      </div>
      {props.componentData.items.map((item, index) => {
        return (
          <div key={index} className="language-wrapper">
          <div className="language-header">
              <div className="language-title">{item.language}</div>
              <div className="language-level">{item.proficiency}</div>
          </div>
          <div className="language-progress">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default Languages;
