import React from "react";
import {Chip} from '@mui/material';

import './Skills.css'
const Skills = () => {
    return (
        <div className="resume-section resume-section-skills">
            <span className="resume-section-title">Skills</span>     
            <div className="skills-item-wrap">
                <Chip className="skills-chip" label="Javascript" variant="outlined" />
                <Chip className="skills-chip" label="HTML" variant="outlined" />
                <Chip className="skills-chip" label="CSS" variant="outlined" />
                <Chip className="skills-chip" label="Angular" variant="outlined" />   
                <Chip className="skills-chip" label="Some Long Long String" variant="outlined" />
                <Chip className="skills-chip no-rounded" label="React" variant="outlined" />
            </div>
        </div>
    );
}

export default Skills;