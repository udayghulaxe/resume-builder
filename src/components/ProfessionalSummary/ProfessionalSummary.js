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
    <div className="resume-section resume-section-ProfessionalSummary">
      <div className="resume-section-title">
        <span>{props.componentItem.name}</span>
        <span className="edit-component-icon">
          <EditIcon onClick={openEditor} />
        </span>
      </div>

      <div className="ProfessionalSummary-item-wrap">

            <div className="ProfessionalSummary-item">              
              <span className="ProfessionalSummary-summary">{props.componentItem.componentData.summaryBody}</span>
            </div>
        
      </div>

      <ProfessionalSummaryEditor
        open={open}
        setOpen={setOpen}
        componentColumn={props.componentColumn}
        componentName={props.componentItem.name}
        editorData={props.componentItem}
      />
    </div>
  );
};

export default ProfessionalSummary;
