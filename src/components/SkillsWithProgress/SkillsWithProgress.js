import React, { useState } from "react";
import { Tooltip } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import EditIcon from '@mui/icons-material/Edit';
import SkillsWithProgressEditor from "./SkillsWithProgressEditor";

import "./SkillsWithProgress.css";

const SkillsWithProgress = (props) => {
  const [open, setOpen] = useState(false);
  console.log('calling SkillsWith Progress Bar', open);
  
  const  openEditor = () => {
      setOpen(true);
  }

  return (
    <div className="resume-section resume-section-language">
      <div className="resume-section-title">
          <span>{props.componentItem.componentData.title}</span>
          <span className="edit-component-icon">
            <Tooltip title="Edit" placement="top" arrow>
              <EditIcon onClick={openEditor} />
            </Tooltip>
          </span>
      </div>
      {props.componentItem.componentData.items.map((item, index) => {
        return (
          <div key={index} className={props.componentItem.componentData.showProficiencyProgress ? 'skill-wrapper' : 'skill-wrapper min-margin'}>
          <div className="skill-header">
              <div className="skill-title">{item.title}</div>
              <div className={`skill-percentage ${props.componentItem.componentData.showProficiency ? '' : 'd-none'}`}> - {item.proficiency}</div>
          </div>
          <div className="skill-progress">
            <LinearProgress className={props.componentItem.componentData.showProficiencyProgress ? '' : 'd-none'} variant="determinate" value={Number(item.proficiency)} />
          </div>
        </div>
        );
      })}

    <SkillsWithProgressEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />

    </div>
  );
};

export default  React.memo(SkillsWithProgress);
