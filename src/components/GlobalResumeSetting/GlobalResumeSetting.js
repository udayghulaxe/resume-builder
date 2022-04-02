import React, { useState } from "react";
import { Button } from "@mui/material";
import { GithubPicker } from 'react-color';

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { fontSizes, colors } from '../../globals.js';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';

import "./GlobalResumeSetting.css";
import { Box } from "@mui/system";

const GlobalResumeSetting = (props) => {

  const [colorsToggles, setColorsToggles] = useState({
    headerFontColorToggle: false,
    headingFontColorToggle: false,
    subheadingFontColorToggle: false,
    bodyFontToggle: false,
    headerBackgroundColorToggle: false,
    sidebarBackgroundColorToogle: false,
  });

  const closeEditor = () => {
    props.setOpen(false);
  };

  const changeFontColor = (property, color) => {
    const root = document.querySelector(":root");
    root.style.setProperty(property, color)
  }

  const changeAboutSectionFontColor = (color) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, aboutSectionFontColor: color.hex});
    openColorToggle('headerFontColorToggle');
  }

  const changeHeadingFontColor = (color) => {
   props.setGlobalResumeSettings({...props.globalResumeSettings, headingFontColor: color.hex});
   changeFontColor("--color-font-heading", color.hex);
   openColorToggle('headingFontColorToggle');
  }

  const changeSubheadingFontColor = (color) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, subheadingFontColor: color.hex});
    changeFontColor("--color-font-subheading", color.hex);
    openColorToggle('subheadingFontColorToggle');
  }

  const changeBodyFontColor = (color) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, bodyFontColor: color.hex});
    changeFontColor("--color-font-body", color.hex);
    openColorToggle('bodyFontColorToggle');
  }

  const changeHeaderBackgroundColor = (color) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, headerBackgroundColor: color.hex});
    openColorToggle('headerBackgroundColorToggle');
  }

  const changeSidebarBackgroundColor = (color) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, sidebarBackgroundColor: color.hex});
    openColorToggle('sidebarBackgroundColorToggle');
  }
  
  const changeHeadingFont = (e, size) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, headingFontSize: size});
  }

  const changeSubheadingFont = (e, size) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, subheadingFontSize: size});
  }

  const changeBodyFont = (e, size) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, bodyFontSize: size});
  }

  const changeHeadingAlignment = (e, alignment) => {
    props.setGlobalResumeSettings({...props.globalResumeSettings, headingAlignment: alignment});
  }

  const onSave = () => {
    props.updateGlobalSetting(props.globalResumeSettings);
    closeEditor();
  }

  const openColorToggle = (colorToggleProp) => {
    setColorsToggles({...colorsToggles, [colorToggleProp]: !colorsToggles[colorToggleProp]});
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
            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className='resume-setting-selected-color'  onClick={() => { openColorToggle('headerFontColorToggle'); }} sx={{backgroundColor: props.globalResumeSettings.aboutSectionFontColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.headerFontColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={ props.globalResumeSettings.aboutSectionFontColor } onChangeComplete={changeAboutSectionFontColor} colors={colors} triangle="hide" />
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
                    <div key={index} className={`font-size-div ${props.globalResumeSettings.headingFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeHeadingFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('headingFontColorToggle'); }} sx={{backgroundColor: props.globalResumeSettings.headingFontColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.headingFontColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={ props.globalResumeSettings.headingFontColor } onChangeComplete={changeHeadingFontColor} colors={colors} triangle="hide" />
              </div>
            </div>


            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Heading Alignment
              </span>
              <div className="resume-setting-item-body">
                  <div className={`heading-alignment-div ${props.globalResumeSettings.headingAlignment === 'left' ? 'active' : ''}`} onClick={(event) => changeHeadingAlignment(event, 'left')}>
                    <FormatAlignLeftOutlinedIcon></FormatAlignLeftOutlinedIcon>
                  </div>

                  <div className={`heading-alignment-div ${props.globalResumeSettings.headingAlignment === 'center' ? 'active' : ''}`} onClick={(event) => changeHeadingAlignment(event, 'center')}>
                    <FormatAlignCenterOutlinedIcon></FormatAlignCenterOutlinedIcon>
                  </div>

                  <div className={`heading-alignment-div ${props.globalResumeSettings.headingAlignment === 'right' ? 'active' : ''}`} onClick={(event) => changeHeadingAlignment(event, 'right')}>
                    <FormatAlignRightOutlinedIcon></FormatAlignRightOutlinedIcon>
                  </div>
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
                    <div key={index} className={`font-size-div ${props.globalResumeSettings.subheadingFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeSubheadingFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('subheadingFontColorToggle'); }} sx={{backgroundColor: props.globalResumeSettings.subheadingFontColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.subheadingFontColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={props.globalResumeSettings.subheadingFontColor} onChangeComplete={changeSubheadingFontColor} colors={colors} triangle="hide" />
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
                    <div key={index} className={`font-size-div ${props.globalResumeSettings.bodyFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeBodyFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('bodyFontColorToggle'); }} sx={{backgroundColor: props.globalResumeSettings.bodyFontColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.bodyFontColorToggle === true ? '' : 'd-none'}`}>
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
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('headerBackgroundColorToggle'); }} sx={{backgroundColor: props.globalResumeSettings.headerBackgroundColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.headerBackgroundColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={props.globalResumeSettings.headerBackgroundColor} onChangeComplete={changeHeaderBackgroundColor} colors={colors} triangle="hide" />
              </div>
            </div>

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Sidebar Background Color 
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('sidebarBackgroundColorToggle'); }} sx={{backgroundColor: props.globalResumeSettings.sidebarBackgroundColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.sidebarBackgroundColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={props.globalResumeSettings.sidebarBackgroundColor} onChangeComplete={changeSidebarBackgroundColor} colors={colors} triangle="hide" />
              </div>
            </div>
          </div>

        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={closeEditor}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default  React.memo(GlobalResumeSetting);
