import React from "react";
import LinearProgress from '@mui/material/LinearProgress';

import "./Language.css";

const Languages = () => {
  return (
    <div className="resume-section resume-section-language">
      <span className="resume-section-title">Languages</span>
      <div className="language-wrapper">
        <div className="language-header">
            <div className="language-title">English</div>
            <div className="language-level">Advanced</div>
        </div>
        <div className="language-progress">
          <LinearProgress variant="determinate" value={60} />
        </div>
      </div>
      <div className="language-wrapper">
        <div className="language-header">
            <div className="language-title">Marathi</div>
            <div className="language-level">Native</div>
        </div>
        <div className="language-progress">
          <LinearProgress variant="determinate" value={85} />
        </div>
      </div>
    </div>
  );
};

export default Languages;
