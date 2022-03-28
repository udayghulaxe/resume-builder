import React from "react";
import { Button } from "@mui/material";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { useDispatch } from "react-redux";
// import { updateResumeDataReducer } from "../../reducers/resumeDataSlice";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import "./GlobalResumeSetting.css";

const GlobalResumeSetting = (props) => {
  const fontSizes = [
    {
      value: "x-small",
      label: "XS",
    },
    {
      value: "small",
      label: "S",
    },
    {
      value: "medium",
      label: "M",
    },
    {
      value: "large",
      label: "L",
    },
    {
      value: "larger",
      label: "XL",
    }
  ];

  const closeEditor = () => {
    props.setOpen(false);
  };

  const changeHeadingFont = (e, size) => {
    props.setHeadingFontSize(size)
  }

  const changeSubheadingFont = (e, size) => {
    props.setSubeadingFontSize(size);
  }

  const changeBodyFont = (e, size) => {
    props.setBodyFontSize(size);
  }


  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      open={props.open}
      onClose={closeEditor}
    >
      <DialogContent>
        <div className="resume-setting-wrap">

          <div className="resume-setting-section">
            <div className="resume-setting-heading">
              <span>Heading</span>
            </div>
            <div className="resume-setting-item">
              <span className="resume-setting-item-label">Font Size</span>
              <div className="resume-setting-item-body">
                {fontSizes.map((font, index) => {
                  return (
                    <div key={index} className={`font-size-div ${props.headingFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeHeadingFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>
          </div>


          <div className="resume-setting-section">
            <div className="resume-setting-heading">
              <span>Subheading</span>
            </div>
            <div className="resume-setting-item">
              <span className="resume-setting-item-label">Font Size</span>
              <div className="resume-setting-item-body">
                {fontSizes.map((font, index) => {
                  return (
                    <div key={index} className={`font-size-div ${props.subheadingFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeSubheadingFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="resume-setting-section">
            <div className="resume-setting-heading">
              <span>Body</span>
            </div>
            <div className="resume-setting-item">
              <span className="resume-setting-item-label">Font Size</span>
              <div className="resume-setting-item-body">
                {fontSizes.map((font, index) => {
                  return (
                    <div key={index} className={`font-size-div ${props.bodyFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeBodyFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={closeEditor}>Cancel</Button>
        <Button onClick={closeEditor}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default  React.memo(GlobalResumeSetting);
