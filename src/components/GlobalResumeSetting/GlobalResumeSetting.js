import React from "react";
import { Button } from "@mui/material";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { useDispatch } from "react-redux";
// import { updateResumeDataReducer } from "../../reducers/resumeDataSlice";
import { GithubPicker } from 'react-color';

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import "./GlobalResumeSetting.css";
import { Box } from "@mui/system";

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

  const colors = ['#000000', '#ffffff', '#483d8b', '#f0f8ff', '#2f4f4f', '#bdb76b', '#183141', '#ffd700', '#D9E2E9', '#141428', '#94AA9E', '#B5282E', '#808000', '#191970', '#FBECD7', '#dc143c' ];

  const closeEditor = () => {
    props.setOpen(false);
  };

  const changeFontColor = (property, color) => {
    const root = document.querySelector(":root");
    root.style.setProperty(property, color)
  }

  const changeAboutSectionFontColor = (color) => {
    props.setAboutSectionFontColor(color.hex);
  }

  const changeHeadingFontColor = (color) => {
   props.setHeadingFontColor(color.hex);
   changeFontColor("--color-font-heading", color.hex);
  }

  const changeSubheadingFontColor = (color) => {
    props.setSubheadingFontColor(color.hex);
    changeFontColor("--color-font-subheading", color.hex);
  }

  const changeBodyFontColor = (color) => {
    props.setBodyFontColor(color.hex);
    changeFontColor("--color-font-body", color.hex);
  }

  const changeHeaderBackgroundColor = (color) => {
    props.setHeaderBackgroundColor(color.hex);
  }

  const changeSidebarBackgroundColor = (color) => {
    props.setSidebarBackgroundColor(color.hex);
  }
  
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
          {/* ABOUT SECTION SETTING */}
            <div className="resume-setting-heading">
              <span>Resume Header Section</span>
            </div>
            {/* <div className="resume-setting-item">
              <span className="resume-setting-item-label">Font Size</span>
              <div className="resume-setting-item-body">
                {fontSizes.map((font, index) => {
                  return (
                    <div key={index} className={`font-size-div ${props.headingFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeHeadingFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div> */}

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" sx={{backgroundColor: props.aboutSectionFontColor}}></Box>
              </span>
              <div className="resume-setting-item-body">
                <GithubPicker color={ props.aboutSectionFontColor } onChangeComplete={changeAboutSectionFontColor} colors={colors} triangle="hide" />
              </div>
            </div>
          </div>

          {/* HEADING FONTS SETTING */} 
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

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" sx={{backgroundColor: props.headingFontColor}}></Box>
              </span>
              <div className="resume-setting-item-body">
                <GithubPicker color={ props.headingFontColor } onChangeComplete={changeHeadingFontColor} colors={colors} triangle="hide" />
              </div>
            </div>
          </div>

          {/* SUBHEADING FONTS SETTING */} 
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

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" sx={{backgroundColor: props.subheadingFontColor}}></Box>
              </span>
              <div className="resume-setting-item-body">
                <GithubPicker color={props.subheadingFontColor} onChangeComplete={changeSubheadingFontColor} colors={colors} triangle="hide" />
              </div>
            </div>
          </div>

          {/* BODY FONTS SETTING */}      
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

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" sx={{backgroundColor: props.bodyFontColor}}></Box>
              </span>
              <div className="resume-setting-item-body">
                <GithubPicker color={props.bodyFontColor} onChangeComplete={changeBodyFontColor} colors={colors} triangle="hide" />
              </div>
            </div>
          </div>

          {/* BACKGROUNDS SETTING */}
          <div className="resume-setting-section">
            <div className="resume-setting-heading">
              <span>Backgrounds</span>
            </div>
            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Header Background Color 
                <Box className="resume-setting-selected-color" sx={{backgroundColor: props.headerBackgroundColor}}></Box>
              </span>
              <div className="resume-setting-item-body">
                <GithubPicker color={props.headerBackgroundColor} onChangeComplete={changeHeaderBackgroundColor} colors={colors} triangle="hide" />
              </div>
            </div>

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Sidebar Background Color 
                <Box className="resume-setting-selected-color" sx={{backgroundColor: props.sidebarBackgroundColor}}></Box>
              </span>
              <div className="resume-setting-item-body">
                <GithubPicker color={props.sidebarBackgroundColor} onChangeComplete={changeSidebarBackgroundColor} colors={colors} triangle="hide" />
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
