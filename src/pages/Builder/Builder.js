import React, { useState, useEffect, Suspense } from "react";
import { AppBar, Button, Box, Toolbar, Link, Paper, Grid, Autocomplete, TextField, CircularProgress, Chip, Alert, Snackbar} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import GoogleLogin from '../../components/Login/GoogleLogin'
import { useSelector, useDispatch } from 'react-redux';
import { getResumeDataByResumeId, updateResumeDataByResumeId } from '../../reducers/resumeDataSlice';
import { getResumeSettingsByResumeId, updateResumeSettingsByResumeId } from '../../reducers/resumeSettingsSlice';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useParams } from "react-router-dom";

import './Builder.css'
import logo from '../../logo.svg';
import GlobalResumeSetting from "../../components/GlobalResumeSetting/GlobalResumeSetting";
import 'react-quill/dist/quill.snow.css';

import Achievement from '../../components/Achievements/Achievement'
import BasicInfo from '../../components/BasicInfo/BasicInfo'
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Languages from '../../components/Languages/Languages';
import ProfessionalSummary from '../../components/ProfessionalSummary/ProfessionalSummary';
import Skills from '../../components/Skills/Skills';
import SkillsWithProgress from '../../components/SkillsWithProgress/SkillsWithProgress';
import Social from '../../components/Social/Social';


function Builder() {
  let resumeHTML;
  const {authReducer, resumeDataReducer, resumeSettingsReducer} = useSelector((state) => state);
  const [arr, setItems] = useState(null);
  const [sidebar, setSidebar] = useState(true);
  const [pageTwo, setPageTwo] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openSnackbar, setopenSnackbar] = useState(false);
  let { resumeId } = useParams();


  const [resumeSettings, setResumeSettings] = useState(null);

  const  openGlobalSetting = () => {
      setOpen(true);
  }

  useEffect(() => {
      console.log('calling builder effect');
      setItems(resumeDataReducer.resumeData);
      setResumeSettings(resumeSettingsReducer.resumeSettings);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resumeDataReducer]);
    
  useEffect(() => {
    if(authReducer.userId) {
      console.log('calling builder auth effect');
      getResumeData();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReducer]);


  function getResumeData() {
    dispatch(getResumeDataByResumeId(resumeId)).then((res) => {
      if (res.payload) {
        setItems(res.payload);
        console.log(res.payload);
        setPageTwo(res.payload.pageTwo.length > 0);
      }
    });

    dispatch(getResumeSettingsByResumeId(resumeId)).then((res) => {
      setResumeSettings(res.payload);
      if (res.payload) {
        
        setTimeout(() => {
          setopenSnackbar(true);
        }, 2000);

        const root = document.querySelector(":root");
        root.style.setProperty("--color-font-heading", res.payload.headingFontColor);
        root.style.setProperty("--color-font-subheading", res.payload.subheadingFontColor);
        root.style.setProperty("--color-font-body", res.payload.bodyFontColor);
        root.style.setProperty("--color-font-about-section", res.payload.aboutSectionFontColor);
      }
    });

    
  }

  function updateResumeData(newData) {
    if (authReducer.userId) {
      dispatch(updateResumeDataByResumeId({data:newData, resumeId: resumeId}));
    }
  }

  function updateGlobalSetting(newData) {
    if (authReducer.userId) {
      dispatch(updateResumeSettingsByResumeId({data:newData, resumeId: resumeId}));
    }
  }


  const getUniqueId = () => {
    return Math.floor(Math.random() * Date.now())
  }

  const closeSnackBar = () => {
    setopenSnackbar(false);
  }

  const copyComponent = (event, item, index, column) => {
    item = {...item, copy: true, name: `${item.name}-${getUniqueId()}`};
    let newArr = JSON.parse(JSON.stringify(arr));
    newArr[column].splice(index + 1, 0, item);
    setItems(newArr);
    updateResumeData(newArr);
  }

  const deleteComponent = (event, item, index, column) => {
    let newArr = JSON.parse(JSON.stringify(arr));
    newArr[column].splice(index, 1);
    setItems(newArr);
    updateResumeData(newArr);
  }


  const addResumePage = () => {
    setPageTwo(true); 
    setTimeout(() => {
    const body = document.getElementById('resumePageSeparator');
    body.scrollIntoView({
        behavior: 'smooth'
    }, 300)
    } , 200);
  }

  const removeResumePage = () => {
    setPageTwo(false);

    let newArr = JSON.parse(JSON.stringify(arr));
    const mergedArr = [...newArr.componentLibrary, ...newArr.pageTwo];
    newArr.componentLibrary = mergedArr;
    newArr.pageTwo = [];
    setItems(newArr);
    updateResumeData(newArr);
  }

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    // if canceling the dragNdrop in between
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }

    // if rearranging in same column
    if (destination.droppableId === source.droppableId) {
        const newArr = Array.from(arr[source.droppableId]);
        newArr.splice(source.index, 1);
        newArr.splice(destination.index, 0, arr[destination.droppableId].filter(x => x.name === draggableId)[0]);
        
        const colId = destination.droppableId;
        
        const newColumn = {
          ...arr,
          [colId]: newArr
        }
        setItems(newColumn);
        updateResumeData(newColumn);
    } else {
      // Else if moving from sidebar to main column or vice-versa
      const sourceId = source.droppableId;
      const destId = destination.droppableId;
      const sourceArr = Array.from(arr[source.droppableId]);
      const destArr = Array.from(arr[destination.droppableId]);
      // remove from source
      sourceArr.splice(source.index, 1);
      // add to destination
      destArr.splice(destination.index, 0, arr[source.droppableId].filter(x => x.name === result.draggableId)[0]);
      const newColumn = {
        ...arr,
        [sourceId]: sourceArr,
        [destId]: destArr
      }
      setItems(newColumn);
      updateResumeData(newColumn);
    }
  }

  function getComponent(componentType, item, columnName) {
      switch (componentType) {
        case 'Achievements':
            return <Achievement componentColumn={columnName} componentItem={item} />;

        case 'BasicInfo':
          return <BasicInfo componentColumn={columnName} componentItem={item} />;    

        case 'Experience':
            return <Experience componentColumn={columnName} componentItem={item} />;

        case 'Education':
            return <Education componentColumn={columnName} componentItem={item} />;

        case 'Languages':
            return <Languages componentColumn={columnName} componentItem={item} />;

        case 'ProfessionalSummary':
          return <ProfessionalSummary componentColumn={columnName} componentItem={item} />;    

        case 'Skills':
          return <Skills componentColumn={columnName} componentItem={item} />;

        case 'SkillsWithProgress':
          return <SkillsWithProgress componentColumn={columnName} componentItem={item} />;

        case 'Social':
            return <Social componentColumn={columnName} componentItem={item} />;
            
        default:
            return null;
    }
  }


  if (arr && resumeSettings) {
    resumeHTML = <DragDropContext onDragEnd={onDragEnd}>
      <Snackbar open={openSnackbar} autoHideDuration={5000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} onClose={closeSnackBar} >
        <Alert variant="filled" severity="success" color="primary" sx={{ width: '100%' }}>
          New Widgets Available. Try Out.
        </Alert>
      </Snackbar>
    <div className="resume-paper-wrap">
    <GlobalResumeSetting 
      resumeSettings={resumeSettings}
      setResumeSettings={setResumeSettings}
      updateGlobalSetting={updateGlobalSetting}
      open={open} 
      setOpen={setOpen}>
    </GlobalResumeSetting>

      <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="layout-options">
              <div className="layout-option-item">
                <Chip  color="primary" icon={<SettingsOutlinedIcon />} onClick={openGlobalSetting} label="Settings" />
              </div>
              
              <div className="layout-option-item">
                <Chip color="primary" icon={<WebAssetOutlinedIcon />} onClick={() => {
                setSidebar(false)
                const newArr = {...arr, main: [...arr['main'], ...arr['sidebar']], sidebar: []};
                setItems(newArr);
                }} label="Single Column" />
              </div>

              <div className="layout-option-item">
              <Chip color="primary" icon={<WebOutlinedIcon />} onClick={() => { setSidebar(true) }} label="Sidebar" />
              </div>

              <div className="layout-option-item">
                {
                  pageTwo ? 
                  <Chip color="primary" icon={<RemoveCircleOutlineOutlinedIcon />} onClick={removeResumePage} label="Remove Page" /> 
                  : <Chip color="primary" icon={<AddCircleOutlineOutlinedIcon />} onClick={addResumePage} label="Add Page" />
                }
                
              </div>
              
            </div>
            <div className="resume-paper-container" id="resumPaperContainer">
            <Paper className={`resume-paper heading-alignment-${resumeSettings.headingAlignment} heading-font-${resumeSettings.headingFontSize} subheading-font-${resumeSettings.subheadingFontSize} body-font-${resumeSettings.bodyFontSize}`} sx={{fontSize: resumeSettings.bodyFontSize, color: resumeSettings.bodyFontColor}} elevation={3} >
              <Grid container>
                <Grid item xs={12} id="header" className={`${arr.header.length > 0 ? '' : 'no-padding'}`} sx={{backgroundColor: resumeSettings.headerBackgroundColor, color: resumeSettings.aboutSectionFontColor}}>
                  <Droppable droppableId="header">
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                        <Suspense fallback={<div>Loading</div>}>
                          {arr.header.map((item, index) => {
                            return (
                              <Draggable key={item.name} draggableId={item.name} index={index}>
                                {(provided, snapshot) => (
                                  <div className={snapshot.isDragging ? 'component-dragging' : 'resume-section-wrap'} 
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      key={item.name}>
                                    { getComponent(item.componentType, item, 'header') }
                                    <div className="overlay">
                                      <span className="drag-handle" {...provided.dragHandleProps}>
                                        <DragIndicatorIcon/>
                                      </span>
                                      <span className="copy-component">
                                        <ContentCopyOutlinedIcon onClick={(event) => copyComponent(event, item, index, 'header')}/>
                                      </span>
                                      <span className={item.copy ? 'delete-component' : 'd-none'}>
                                        <CloseOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'header')}/>
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            );
                          }
                          )}
                          {provided.placeholder}
                        </Suspense>
                      </div>
                    )}
                  </Droppable>
                </Grid>
                <Grid item xs={sidebar ? 7 : 12} id="main" className={`${arr.header.length > 0 ? '' : 'padding'}`}>
                <Droppable droppableId="main">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                      <Suspense fallback={<div>Loading</div>}>
                        {arr.main.map((item, index) => {
                          return (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div className={snapshot.isDragging ? 'resume-section-wrap component-dragging' : 'resume-section-wrap'} 
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    key={item.name}>
                                  
                                  { getComponent(item.componentType, item, 'main') }
                                  <div className="overlay">
                                    <span className="drag-handle" {...provided.dragHandleProps}>
                                      <DragIndicatorIcon/>
                                    </span>
                                    <span className="copy-component">
                                      <ContentCopyOutlinedIcon onClick={(event) => copyComponent(event, item, index, 'main')}/>
                                    </span>
                                    <span className={item.copy ? 'delete-component' : 'd-none'}>
                                        <CloseOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'main')}/>
                                      </span>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                        )}
                        {provided.placeholder}
                      </Suspense>
                    </div>
                  )}
                </Droppable>
                </Grid>
                
                {sidebar ? 
                <Grid item xs={5} id="sidebar" sx={{backgroundColor: resumeSettings.sidebarBackgroundColor}} className={`${arr.header.length > 0 ? '' : 'padding'}`}>
                <Droppable droppableId="sidebar">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over sidebar-column' : 'resume-paper-content sidebar-column'}>
                      {provided.isDragging}
                      <Suspense fallback={<div>Loading</div>}>
                        {arr.sidebar.map((item, index) => {
                          return (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div className={snapshot.isDragging ? 'component-dragging' : 'resume-section-wrap'}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      key={item.name}>
                                  { getComponent(item.componentType, item, 'sidebar') }
                                  <div className="overlay">
                                    <span className="drag-handle" {...provided.dragHandleProps}>
                                      <DragIndicatorIcon/>
                                    </span>
                                    <span className="copy-component">
                                      <ContentCopyOutlinedIcon onClick={(event) => copyComponent(event, item, index, 'sidebar')}/>
                                    </span>
                                    <span className={item.copy ? 'delete-component' : 'd-none'}>
                                        <CloseOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'sidebar')}/>
                                      </span>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                        )}
                        {provided.placeholder}
                      </Suspense>
                    </div>
                  )}
                </Droppable>
                </Grid> : null}
              </Grid>
            </Paper>
            <Box sx={{height: 30}} id='resumePageSeparator'></Box>             
            {pageTwo ?
            <Paper className={`resume-paper heading-alignment-${resumeSettings.headingAlignment} heading-font-${resumeSettings.headingFontSize} subheading-font-${resumeSettings.subheadingFontSize} body-font-${resumeSettings.bodyFontSize}`} sx={{fontSize: resumeSettings.bodyFontSize, color: resumeSettings.bodyFontColor}} elevation={3} >
              <Grid container>
                <Grid item xs={12} id="pageTwo" className={`${arr.header.length > 0 ? '' : 'padding'}`}>
                <Droppable droppableId="pageTwo">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                      <Suspense fallback={<div>Loading</div>}>
                        {arr.pageTwo.map((item, index) => {
                          return (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div className={snapshot.isDragging ? 'resume-section-wrap component-dragging' : 'resume-section-wrap'} 
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    key={item.name}>
                                  
                                  { getComponent(item.componentType, item, 'pageTwo') }
                                  <div className="overlay">
                                    <span className="drag-handle" {...provided.dragHandleProps}>
                                      <DragIndicatorIcon/>
                                    </span>
                                    <span className="copy-component">
                                      <ContentCopyOutlinedIcon onClick={(event) => copyComponent(event, item, index, 'pageTwo')}/>
                                    </span>
                                    <span className={item.copy ? 'delete-component' : 'd-none'}>
                                        <CloseOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'pageTwo')}/>
                                      </span>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                        )}
                        {provided.placeholder}
                      </Suspense>
                    </div>
                  )}
                </Droppable>
                </Grid>
              </Grid>
            </Paper>
            : null}
            </div>     
          </Grid>
          <Grid className="component-library-wrap" item xs={4}>
            <div className="component-library-header">
              <div>
                <span className="component-library-title">All Widgets</span>
              </div>
              <Autocomplete
                id="component-library-filter"
                options={[
                  { label: 'Education', id: 1 },
                  { label: 'Skills', id: 2 },
                ]}
                sx={{ width: 150 }}
                renderInput={(params) => <TextField {...params} placeholder="Filter"  variant="standard" />}
              />
            </div>            
            <Paper style={{padding: '20px'}} className="widget-library" elevation={0}>

            <Droppable droppableId="componentLibrary">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                      {provided.isDragging}
                      <Suspense fallback={<div>Loading</div>}>
                        {arr.componentLibrary.map((item, index) => {
                          return (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div className={snapshot.isDragging ? 'resume-section-wrap component-dragging' : 'resume-section-wrap'}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      key={item.name}>

                                  { getComponent(item.componentType, item, 'componentLibrary') }
                                  <div className="overlay">
                                    <span className="drag-handle" {...provided.dragHandleProps}>
                                      <DragIndicatorIcon/>
                                    </span>
                                    <span className="copy-component">
                                      <ContentCopyOutlinedIcon onClick={(event) => copyComponent(event, item, index, 'componentLibrary')}/>
                                    </span>
                                    <span className={item.copy ? 'delete-component' : 'd-none'}>
                                        <CloseOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'componentLibrary')}/>
                                      </span>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        }
                        )}
                        {provided.placeholder}
                      </Suspense>
                    </div>
                  )}
                </Droppable>
            </Paper>
          </Grid>
      </Grid>
      
    </div>

  </DragDropContext>;
  } else {
    resumeHTML = <div className="initial-loader">
                    <CircularProgress />
                </div>;
  }

  return (
    <div className="builder-wrap">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar elevation={0} className="global-header" color="inherit" position="fixed">
            <Toolbar className="builder-header">
              <div className="header-filters">
                <img src={logo} className="header-logo" alt="Resume Builder" />
                  <Link underline="none" className="builder-header-menu-link active" href="#">About</Link>
                  <Link underline="none" className="builder-header-menu-link" href="#">Experience</Link>
                  <Link underline="none" className="builder-header-menu-link" href="#">Education</Link>
                  <Link underline="none" className="builder-header-menu-link" href="#">Skills</Link>
                  <Link underline="none" className="builder-header-menu-link" href="#">Languages</Link>
                  <Link underline="none" className="builder-header-menu-link" href="#">Achievement</Link>
              </div>
              <div>
                <Button
                    onClick={window.print}
                    variant="contained"
                    color="primary" 
                    disableElevation
                    className="header-download-button">
                        Download Resume
                </Button>
                <GoogleLogin></GoogleLogin>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      
      {resumeHTML}
    </div>
  );
}

export default Builder;