import React,{useState} from "react";
import EditIcon from "@mui/icons-material/Edit";

import ProfessionalSummaryEditor from "./ProfessionalSummaryEditor";

import "./ProfessionalSummary.css";

const ProfessionalSummary = (props) => {
  const [open, setOpen] = useState(false);
  console.log("calling ProfessionalSummary", open);

  const openEditor = () => {
    setOpen(true);
  };

  return (



<div className="resume-section resume-section-professional-summary">
            <div className="resume-section-title">
                <span>{props.componentItem.componentData.title}</span>
                <span className="edit-component-icon">
                    <EditIcon onClick={openEditor}/>
                </span>
            </div>   
            
            <div className="professional-summary-item-wrap">
                {props.componentItem.componentData.items.map((item, index) => {
                    return (
                        <div className='professional-summary-item' key={index}>
                             <span className="professional-summary-summary-body">{item.summary}</span>
                        </div>
                        
                    );
                })}
            </div>

            <ProfessionalSummaryEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />
        </div>
  );
};

export default  React.memo(ProfessionalSummary);
