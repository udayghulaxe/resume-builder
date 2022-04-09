import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from '@mui/icons-material/Edit';
import AchievementEditor from "./AchievementEditor";

import "./Achievement.css";

const Achievement = (props) => {
  const [open, setOpen] = useState(false);
  console.log('calling achievment', open);
  
  const  openEditor = () => {
      setOpen(true);
  }

  return (
    <div className="resume-section resume-section-achievement">
      <div className="resume-section-title">
        <span>{props.componentItem.componentData.title}</span>
        <span className="edit-component-icon">
          <EditIcon onClick={openEditor} />
        </span>
      </div> 

      <div className="achievement-item-wrap">
        {props.componentItem.componentData.items.map((item, index) => {
          return (
            <div key={`achievement-${index}`} className="achievement-item">
              <span className={`achievement-icon ${props.componentItem.componentData.showIcon ? '' : 'd-none'}`}>
                <StarIcon />
              </span>
              <span className="achievement-summary">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      <AchievementEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />

    </div>
  );
};

export default  React.memo(Achievement);
