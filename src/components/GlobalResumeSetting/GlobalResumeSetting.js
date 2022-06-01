import React, { useState } from 'react';
import { Button } from '@mui/material';
import { GithubPicker } from 'react-color';
import { fontSizes, colors } from '../../globals.js';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';

import './GlobalResumeSetting.css';
import { Box } from '@mui/system';

const GlobalResumeSetting = props => {
    const [colorsToggles, setColorsToggles] = useState({
        headerFontColorToggle: false,
        headingFontColorToggle: false,
        subheadingFontColorToggle: false,
        bodyFontToggle: false,
        headerBackgroundColorToggle: false,
        sidebarBackgroundColorToogle: false,
        sidebarHeadingColorToggle: false,
        mainBackgroundColorToggle: false,
    });

    const closeEditor = () => {
        props.openEditorSection();
    };

    const changeFontColor = (property, color) => {
        const root = document.querySelector(':root');
        root.style.setProperty(property, color);
    };

    const changeAboutSectionFontColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, aboutSectionFontColor: color.hex });
        openColorToggle('headerFontColorToggle');
        changeFontColor('--color-font-about-section', color.hex);
    };

    const changeHeadingFontColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, headingFontColor: color.hex });
        changeFontColor('--color-font-heading', color.hex);
        openColorToggle('headingFontColorToggle');
    };

    const changeSubheadingFontColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, subheadingFontColor: color.hex });
        changeFontColor('--color-font-subheading', color.hex);
        openColorToggle('subheadingFontColorToggle');
    };

    const changeBodyFontColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, bodyFontColor: color.hex });
        changeFontColor('--color-font-body', color.hex);
        openColorToggle('bodyFontColorToggle');
    };

    const changeHeaderBackgroundColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, headerBackgroundColor: color.hex });
        openColorToggle('headerBackgroundColorToggle');
    };

    const changeSidebarBackgroundColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, sidebarBackgroundColor: color.hex });
        openColorToggle('sidebarBackgroundColorToggle');
    };

    const changeSidebarBodyColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, sidebarBodyColor: color.hex });
        changeFontColor('--color-sidebar-body', color.hex);
        openColorToggle('sidebarBodyColorToggle');
    };

    const changeSidebarHeadingColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, sidebarHeadingColor: color.hex });
        changeFontColor('--color-sidebar-heading', color.hex);
        openColorToggle('sidebarHeadingColorToggle');
    };

    const changeMainBackgroundColor = color => {
        props.setResumeSettings({ ...props.resumeSettings, mainBackgroundColor: color.hex });
        openColorToggle('mainBackgroundColorToggle');
    };

    const changeHeadingFont = (e, size) => {
        props.setResumeSettings({ ...props.resumeSettings, headingFontSize: size });
    };

    const changeSubheadingFont = (e, size) => {
        props.setResumeSettings({ ...props.resumeSettings, subheadingFontSize: size });
    };

    const changeBodyFont = (e, size) => {
        props.setResumeSettings({ ...props.resumeSettings, bodyFontSize: size });
    };

    const changeHeadingAlignment = (e, alignment) => {
        props.setResumeSettings({ ...props.resumeSettings, headingAlignment: alignment });
    };

    const onSave = () => {
        props.updateGlobalSetting(props.resumeSettings);
        closeEditor();
    };

    const openColorToggle = colorToggleProp => {
        setColorsToggles({ ...colorsToggles, [colorToggleProp]: !colorsToggles[colorToggleProp] });
    };

    const changeSidebarPosition = (e, position) => {
        props.setResumeSettings({ ...props.resumeSettings, sidebarPosition: position });
    };

    return (
        <div className='resume-setting-wrap'>
            <div className='resume-setting-section-header'>
                <Button size='small' variant='contained' onClick={onSave}>
                    Save Changes
                </Button>
                <Button size='small' variant='outlined' onClick={closeEditor}>
                    Close
                </Button>
            </div>
            <div className='resume-setting-section'>
                {/* ABOUT SECTION SETTING */}
                <div className='resume-setting-heading'>
                    <span>Resume Header Section</span>
                </div>
                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>
                        Font Color
                        <Box
                            className='resume-setting-selected-color'
                            onClick={() => {
                                openColorToggle('headerFontColorToggle');
                            }}
                            sx={{ backgroundColor: props.resumeSettings.aboutSectionFontColor }}
                        ></Box>
                    </span>
                    <div
                        className={`resume-setting-item-body ${
                            colorsToggles.headerFontColorToggle === true ? '' : 'd-none'
                        }`}
                    >
                        <GithubPicker
                            color={props.resumeSettings.aboutSectionFontColor}
                            onChangeComplete={changeAboutSectionFontColor}
                            colors={colors}
                            triangle='hide'
                        />
                    </div>
                </div>

                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>
                        Background Color
                        <Box
                            className='resume-setting-selected-color'
                            onClick={() => {
                                openColorToggle('headerBackgroundColorToggle');
                            }}
                            sx={{ backgroundColor: props.resumeSettings.headerBackgroundColor }}
                        ></Box>
                    </span>
                    <div
                        className={`resume-setting-item-body ${
                            colorsToggles.headerBackgroundColorToggle === true ? '' : 'd-none'
                        }`}
                    >
                        <GithubPicker
                            color={props.resumeSettings.headerBackgroundColor}
                            onChangeComplete={changeHeaderBackgroundColor}
                            colors={colors}
                            triangle='hide'
                        />
                    </div>
                </div>
            </div>
            <div className='resume-setting-section'>
                <div className='resume-setting-heading'>
                    <span>Resume Main Section</span>
                </div>
                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>
                        Heading Font Color
                        <Box
                            className='resume-setting-selected-color'
                            onClick={() => {
                                openColorToggle('headingFontColorToggle');
                            }}
                            sx={{ backgroundColor: props.resumeSettings.headingFontColor }}
                        ></Box>
                    </span>
                    <div
                        className={`resume-setting-item-body ${
                            colorsToggles.headingFontColorToggle === true ? '' : 'd-none'
                        }`}
                    >
                        <GithubPicker
                            color={props.resumeSettings.headingFontColor}
                            onChangeComplete={changeHeadingFontColor}
                            colors={colors}
                            triangle='hide'
                        />
                    </div>
                </div>

                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>
                        Body Font Color
                        <Box
                            className='resume-setting-selected-color'
                            onClick={() => {
                                openColorToggle('bodyFontColorToggle');
                            }}
                            sx={{ backgroundColor: props.resumeSettings.bodyFontColor }}
                        ></Box>
                    </span>
                    <div
                        className={`resume-setting-item-body ${
                            colorsToggles.bodyFontColorToggle === true ? '' : 'd-none'
                        }`}
                    >
                        <GithubPicker
                            color={props.resumeSettings.bodyFontColor}
                            onChangeComplete={changeBodyFontColor}
                            colors={colors}
                            triangle='hide'
                        />
                    </div>
                </div>

                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>
                        Background Color
                        <Box
                            className='resume-setting-selected-color'
                            onClick={() => {
                                openColorToggle('mainBackgroundColorToggle');
                            }}
                            sx={{ backgroundColor: props.resumeSettings.mainBackgroundColor }}
                        ></Box>
                    </span>
                    <div
                        className={`resume-setting-item-body ${
                            colorsToggles.mainBackgroundColorToggle === true ? '' : 'd-none'
                        }`}
                    >
                        <GithubPicker
                            color={props.resumeSettings.mainBackgroundColor}
                            onChangeComplete={changeMainBackgroundColor}
                            colors={colors}
                            triangle='hide'
                        />
                    </div>
                </div>
            </div>

            {props.resumeSettings.sidebar && (
                <div className='resume-setting-section'>
                    <div className='resume-setting-heading'>
                        <span>Resume Sidebar Section</span>
                    </div>

                    <div className='resume-setting-item'>
                        <span className='resume-setting-item-label'>
                            Heading Font Color
                            <Box
                                className='resume-setting-selected-color'
                                onClick={() => {
                                    openColorToggle('sidebarHeadingColorToggle');
                                }}
                                sx={{ backgroundColor: props.resumeSettings.sidebarHeadingColor }}
                            ></Box>
                        </span>
                        <div
                            className={`resume-setting-item-body ${
                                colorsToggles.sidebarHeadingColorToggle === true ? '' : 'd-none'
                            }`}
                        >
                            <GithubPicker
                                color={props.resumeSettings.sidebarHeadingColor}
                                onChangeComplete={changeSidebarHeadingColor}
                                colors={colors}
                                triangle='hide'
                            />
                        </div>
                    </div>

                    <div className='resume-setting-item'>
                        <span className='resume-setting-item-label'>
                            Body Font Color
                            <Box
                                className='resume-setting-selected-color'
                                onClick={() => {
                                    openColorToggle('sidebarBodyColorToggle');
                                }}
                                sx={{ backgroundColor: props.resumeSettings.sidebarBodyColor }}
                            ></Box>
                        </span>
                        <div
                            className={`resume-setting-item-body ${
                                colorsToggles.sidebarBodyColorToggle === true ? '' : 'd-none'
                            }`}
                        >
                            <GithubPicker
                                color={props.resumeSettings.sidebarBodyColor}
                                onChangeComplete={changeSidebarBodyColor}
                                colors={colors}
                                triangle='hide'
                            />
                        </div>
                    </div>

                    <div className='resume-setting-item'>
                        <span className='resume-setting-item-label'>
                            Background Color
                            <Box
                                className='resume-setting-selected-color'
                                onClick={() => {
                                    openColorToggle('sidebarBackgroundColorToggle');
                                }}
                                sx={{ backgroundColor: props.resumeSettings.sidebarBackgroundColor }}
                            ></Box>
                        </span>
                        <div
                            className={`resume-setting-item-body ${
                                colorsToggles.sidebarBackgroundColorToggle === true ? '' : 'd-none'
                            }`}
                        >
                            <GithubPicker
                                color={props.resumeSettings.sidebarBackgroundColor}
                                onChangeComplete={changeSidebarBackgroundColor}
                                colors={colors}
                                triangle='hide'
                            />
                        </div>
                    </div>

                    <div className='resume-setting-item'>
                        <span className='resume-setting-item-label'>Sidebar Position</span>
                        <div className='resume-setting-item-body'>
                            <div
                                className={`font-size-div ${
                                    props.resumeSettings.sidebarPosition === 'left' ? 'active' : ''
                                }`}
                                onClick={event => changeSidebarPosition(event, 'left')}
                            >
                                Left
                            </div>
                            <div
                                className={`font-size-div ${
                                    props.resumeSettings.sidebarPosition === 'right' ? 'active' : ''
                                }`}
                                onClick={event => changeSidebarPosition(event, 'right')}
                            >
                                Right
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='resume-setting-section'>
                <div className='resume-setting-heading'>
                    <span>Font Sizes</span>
                </div>
                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>Heading Font Size</span>
                    <div className='resume-setting-item-body'>
                        {fontSizes.map((font, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`font-size-div ${
                                        props.resumeSettings.headingFontSize === font.value ? 'active' : ''
                                    }`}
                                    onClick={event => changeHeadingFont(event, font.value)}
                                >
                                    {font.label}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>SubHeading Font Size</span>
                    <div className='resume-setting-item-body'>
                        {fontSizes.map((font, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`font-size-div ${
                                        props.resumeSettings.subheadingFontSize === font.value ? 'active' : ''
                                    }`}
                                    onClick={event => changeSubheadingFont(event, font.value)}
                                >
                                    {font.label}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>Body Font Size</span>
                    <div className='resume-setting-item-body'>
                        {fontSizes.map((font, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`font-size-div ${
                                        props.resumeSettings.bodyFontSize === font.value ? 'active' : ''
                                    }`}
                                    onClick={event => changeBodyFont(event, font.value)}
                                >
                                    {font.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='resume-setting-section'>
                <div className='resume-setting-heading'>
                    <span>Heading Styles</span>
                </div>
                <div className='resume-setting-item'>
                    <span className='resume-setting-item-label'>Heading Alignment</span>
                    <div className='resume-setting-item-body'>
                        <div
                            className={`heading-alignment-div ${
                                props.resumeSettings.headingAlignment === 'left' ? 'active' : ''
                            }`}
                            onClick={event => changeHeadingAlignment(event, 'left')}
                        >
                            <FormatAlignLeftOutlinedIcon></FormatAlignLeftOutlinedIcon>
                        </div>

                        <div
                            className={`heading-alignment-div ${
                                props.resumeSettings.headingAlignment === 'center' ? 'active' : ''
                            }`}
                            onClick={event => changeHeadingAlignment(event, 'center')}
                        >
                            <FormatAlignCenterOutlinedIcon></FormatAlignCenterOutlinedIcon>
                        </div>

                        <div
                            className={`heading-alignment-div ${
                                props.resumeSettings.headingAlignment === 'right' ? 'active' : ''
                            }`}
                            onClick={event => changeHeadingAlignment(event, 'right')}
                        >
                            <FormatAlignRightOutlinedIcon></FormatAlignRightOutlinedIcon>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
          <div className="resume-setting-section">
            <div className="resume-setting-heading">
              <span>Font Sizes</span>
            </div>
            <div className="resume-setting-item">
              <span className="resume-setting-item-label">Heading Font Size</span>
              <div className="resume-setting-item-body">
                {fontSizes.map((font, index) => {
                  return (
                    <div key={index} className={`font-size-div ${props.resumeSettings.headingFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeHeadingFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('headingFontColorToggle'); }} sx={{backgroundColor: props.resumeSettings.headingFontColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.headingFontColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={ props.resumeSettings.headingFontColor } onChangeComplete={changeHeadingFontColor} colors={colors} triangle="hide" />
              </div>
            </div>


            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Heading Alignment
              </span>
              <div className="resume-setting-item-body">
                  <div className={`heading-alignment-div ${props.resumeSettings.headingAlignment === 'left' ? 'active' : ''}`} onClick={(event) => changeHeadingAlignment(event, 'left')}>
                    <FormatAlignLeftOutlinedIcon></FormatAlignLeftOutlinedIcon>
                  </div>

                  <div className={`heading-alignment-div ${props.resumeSettings.headingAlignment === 'center' ? 'active' : ''}`} onClick={(event) => changeHeadingAlignment(event, 'center')}>
                    <FormatAlignCenterOutlinedIcon></FormatAlignCenterOutlinedIcon>
                  </div>

                  <div className={`heading-alignment-div ${props.resumeSettings.headingAlignment === 'right' ? 'active' : ''}`} onClick={(event) => changeHeadingAlignment(event, 'right')}>
                    <FormatAlignRightOutlinedIcon></FormatAlignRightOutlinedIcon>
                  </div>
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
                    <div key={index} className={`font-size-div ${props.resumeSettings.subheadingFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeSubheadingFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('subheadingFontColorToggle'); }} sx={{backgroundColor: props.resumeSettings.subheadingFontColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.subheadingFontColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={props.resumeSettings.subheadingFontColor} onChangeComplete={changeSubheadingFontColor} colors={colors} triangle="hide" />
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
                    <div key={index} className={`font-size-div ${props.resumeSettings.bodyFontSize === font.value ? 'active' : ''}`} onClick={(event) => changeBodyFont(event, font.value)}>{font.label}</div>
                  );
                })}
              </div>
            </div>

            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Font Color
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('bodyFontColorToggle'); }} sx={{backgroundColor: props.resumeSettings.bodyFontColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.bodyFontColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={props.bodyFontColor} onChangeComplete={changeBodyFontColor} colors={colors} triangle="hide" />
              </div>
            </div>
          </div>

          <div className="resume-setting-heading">
            <span>Backgrounds</span>
          </div>
          <div className="resume-setting-section">
            <div className="resume-setting-item">
              <span className="resume-setting-item-label">
                Sidebar Background Color 
                <Box className="resume-setting-selected-color" onClick={() => { openColorToggle('sidebarBackgroundColorToggle'); }} sx={{backgroundColor: props.resumeSettings.sidebarBackgroundColor}}></Box>
              </span>
              <div className={`resume-setting-item-body ${colorsToggles.sidebarBackgroundColorToggle === true ? '' : 'd-none'}`}>
                <GithubPicker color={props.resumeSettings.sidebarBackgroundColor} onChangeComplete={changeSidebarBackgroundColor} colors={colors} triangle="hide" />
              </div>
            </div>
          </div> */}
        </div>
    );
};

export default React.memo(GlobalResumeSetting);
