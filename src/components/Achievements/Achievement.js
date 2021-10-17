import React from "react";
import StarIcon from "@mui/icons-material/Star";

import "./Achievement.css";

const Achievement = () => {
  return (
    <div className="resume-section resume-section-achievement">
      <span className="resume-section-title">Achievements</span>
      <div className="achievement-item-wrap">
        <div className="achievement-item">
          <span className="achievement-icon">
            <StarIcon/>
          </span>
          <span className="achievement-summary">
            Won Best Employee Award for last 2 consecutive year (2020 & 2021).
          </span>
        </div>
        <div className="achievement-item">
          <span className="achievement-icon">
            <StarIcon/>
          </span>
          <span className="achievement-summary">
            Won inter-zone cricket competition (2020).
          </span>
        </div>
        <div className="achievement-item">
          <span className="achievement-icon">
            <StarIcon/>
          </span>
          <span className="achievement-summary">
            Runner up for state level table tennis competition (2020).
          </span>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
