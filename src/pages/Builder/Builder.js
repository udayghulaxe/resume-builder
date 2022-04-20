import React, { useState, useEffect, Suspense } from "react";
import { Button, Box, Paper, Grid, Autocomplete, TextField, CircularProgress, Alert, Snackbar } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { getResumeDataByResumeId, updateResumeDataByResumeId } from '../../reducers/resumeDataSlice';
import { getResumeSettingsByResumeId, updateResumeSettingsByResumeId } from '../../reducers/resumeSettingsSlice';
import { getUserDataByUserId, updateUserResumeDataByUserId } from '../../reducers/userDataSlice';

import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";

import './Builder.css'
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
  const { authReducer, resumeDataReducer, resumeSettingsReducer, userDataReducer } = useSelector((state) => state);
  const [arr, setItems] = useState(null);
  const [pageTwo, setPageTwo] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openSnackbar, setopenSnackbar] = useState(false);
  let { resumeId } = useParams();


  const [resumeSettings, setResumeSettings] = useState(null);

  const openGlobalSetting = () => {
    setOpen(true);
  }

  useEffect(() => {
    console.log('calling builder effect');
    setItems(resumeDataReducer.resumeData);
    setResumeSettings(resumeSettingsReducer.resumeSettings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resumeDataReducer]);

  useEffect(() => {
    if (authReducer.userId) {
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
        setPageTwo(res.payload.pageTwo && res.payload.pageTwo.length > 0);
      }
    });

    dispatch(getUserDataByUserId(authReducer.userId));

    dispatch(getResumeSettingsByResumeId(resumeId)).then((res) => {
      setResumeSettings(res.payload);
      if (res.payload) {

        // setTimeout(() => {
        //   setopenSnackbar(true);
        // }, 2000);

        const root = document.querySelector(":root");
        root.style.setProperty("--color-font-heading", res.payload.headingFontColor);
        root.style.setProperty("--color-font-subheading", res.payload.subheadingFontColor);
        root.style.setProperty("--color-font-body", res.payload.bodyFontColor);
        root.style.setProperty("--color-font-about-section", res.payload.aboutSectionFontColor);
        root.style.setProperty("--color-sidebar-body", res.payload.sidebarBodyColor);
        root.style.setProperty("--color-sidebar-heading", res.payload.sidebarHeadingColor);



      }
    });
  }

  function updateResumeData(newData) {
    if (authReducer.userId) {
      dispatch(updateResumeDataByResumeId({ data: newData, resumeId: resumeId }));
    }

    setTimeout(() => {
      checkForPageTwo(newData);
    }, 1000);
    
  }

  function updateGlobalSetting(newData) {
    if (authReducer.userId) {
      dispatch(updateResumeSettingsByResumeId({ data: newData, resumeId: resumeId }));
    }
  }

  const checkForPageTwo = (newData) => {
    const paperheight = document.querySelector('#main .resume-paper-content').clientHeight;
    const childs = document.querySelector('#main .resume-paper-content').children;
    let height = 0;
    for (var i = 0; i < childs.length; i++) {
      height += childs[i].clientHeight;
    }
    if(height + 30 > paperheight) {
      console.log('if- need Page two');
      setPageTwo(true);

     moveLastComponentToPageTwo(newData);
    } else {
      console.log('else-');
      // setPageTwo(false);
      console.log(paperheight, height);
    }
  }

  const moveLastComponentToPageTwo = (newData) => {
    let newArr = JSON.parse(JSON.stringify(newData));
    newArr.pageTwo.push(newArr.main[newArr.main.length - 1]);
    newArr.main.pop();
    setItems(newArr);
    updateResumeData(newArr);
  }

  const onSidebarSettingClick = () => {
    if (resumeSettings.sidebar) {
      const newArr = { ...arr, componentLibrary: [...arr['componentLibrary'], ...arr['sidebar']], sidebar: [] };
      setItems(newArr);
    }

    setResumeSettings({ ...resumeSettings, sidebar: !resumeSettings.sidebar });
    updateGlobalSetting({ ...resumeSettings, sidebar: !resumeSettings.sidebar });
  }

  const saveChanges = () => {
    if (authReducer.userId) {
      updateResumeData(arr);
      updateResumeThumbnail();
    }
  }

  const updateResumeThumbnail = () => {
    const pageOneElement = document.querySelector("#pageOne");
    html2canvas(pageOneElement).then(function (canvas) {
      const userResumesData = JSON.parse(userDataReducer.userData.userResumes);
      userResumesData.filter(resume => resume.resumeId.toString() === resumeId.toString())[0].resumeImage = canvas.toDataURL("image/jpeg");
      dispatch(updateUserResumeDataByUserId({ userId: authReducer.userId, data: JSON.stringify(userResumesData) }));
    });
  }


  const getUniqueId = () => {
    return Math.floor(Math.random() * Date.now())
  }

  const closeSnackBar = () => {
    setopenSnackbar(false);
  }

  const copyComponent = (event, item, index, column) => {
    item = { ...item, copy: true, name: `${item.name}-${getUniqueId()}` };
    let newArr = JSON.parse(JSON.stringify(arr));
    newArr[column].splice(index + 1, 0, item);
    setItems(newArr);
    updateResumeData(newArr);
  }

  const removeComponent = (event, item, index, column) => {
    let newArr = JSON.parse(JSON.stringify(arr));
    newArr[column].splice(index, 1);
    newArr.componentLibrary.push(item);
    setItems(newArr);
    updateResumeData(newArr);
  }

  const addComponentToResume = (event, item, index, column) => {
    let newArr = JSON.parse(JSON.stringify(arr));
    newArr[column].splice(index, 1);
    newArr.main.push(item);
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
    }, 200);
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
              <div className="layout-option-items">
                <div className="layout-option-item">
                  <Button variant="outlined" color="primary" size="small" startIcon={<SettingsOutlinedIcon />} onClick={openGlobalSetting}>Settings</Button>
                </div>

                <div className="layout-option-item">
                  {
                    resumeSettings.sidebar ?
                      <Button variant="outlined" color="primary" size="small" startIcon={<WebAssetOutlinedIcon />} onClick={onSidebarSettingClick} >Single Column</Button>
                      : <Button variant="outlined" color="primary" size="small" startIcon={<WebOutlinedIcon />} onClick={onSidebarSettingClick} >Sidebar</Button>
                  }
                </div>

                <div className="layout-option-item">
                  {
                    pageTwo ?
                      <Button variant="outlined" color="primary" size="small" startIcon={<RemoveCircleOutlineOutlinedIcon />} onClick={removeResumePage} >Remove Page</Button>
                      : <Button variant="outlined" color="primary" size="small" startIcon={<AddCircleOutlineOutlinedIcon />} onClick={addResumePage} >Add Page</Button>
                  }
                </div>
              </div>

              <div className="layout-option-items">
                <div className="layout-option-item">
                  <Button color="primary" variant="contained" disableElevation size="small" startIcon={<SaveOutlinedIcon />} onClick={saveChanges} >Save Changes</Button>
                </div>

                <div className="layout-option-item">
                  <Button
                    onClick={window.print}
                    variant="contained"
                    color="primary"
                    size="small"
                    disableElevation>
                    Download Resume
                  </Button>
                </div>
              </div>

            </div>
            <div className="resume-paper-container" id="resumPaperContainer">
              <Paper className={`resume-paper heading-alignment-${resumeSettings.headingAlignment} heading-font-${resumeSettings.headingFontSize} subheading-font-${resumeSettings.subheadingFontSize} body-font-${resumeSettings.bodyFontSize}`} sx={{ fontSize: resumeSettings.bodyFontSize === 'medium' ? '15px' : resumeSettings.bodyFontSize }} elevation={3} >
                <div id="pageOne">
                  <Grid item xs={12} id="header" className={`${arr.header.length > 0 ? '' : 'no-padding'}`} sx={{ backgroundColor: resumeSettings.headerBackgroundColor, color: resumeSettings.aboutSectionFontColor }}>
                    <Droppable droppableId="header">
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                          {arr.header.map((item, index) => {
                            return (
                              <Draggable key={item.name} draggableId={item.name} index={index}>
                                {(provided, snapshot) => (
                                  <div className={snapshot.isDragging ? 'component-dragging' : 'resume-section-wrap'}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    key={item.name}>
                                    {getComponent(item.componentType, item, 'header')}
                                    <div className="overlay">
                                      <span className="drag-handle" {...provided.dragHandleProps}>
                                        <OpenWithIcon titleAccess="Grab & Move" />
                                      </span>
                                      <span className="copy-component">
                                        <ContentCopyOutlinedIcon titleAccess="Copy" onClick={(event) => copyComponent(event, item, index, 'header')} />
                                      </span>
                                      <span className="remove-component">
                                        <RemoveOutlinedIcon titleAccess="Remove From Resume" onClick={(event) => removeComponent(event, item, index, 'header')} />
                                      </span>
                                      <span className={item.copy ? 'delete-component' : 'd-none'}>
                                        <DeleteOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'header')} />
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            );
                          }
                          )}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </Grid>
                  <div className={`resume-paper-main-content sidebar-${resumeSettings.sidebarPosition}`}>
                    <Grid item xs={resumeSettings.sidebar ? 7 : 12} id="main" className={`${arr.header.length > 0 ? '' : 'padding'}`} sx={{ backgroundColor: resumeSettings.mainBackgroundColor, color: resumeSettings.bodyFontColor }}>
                      <Droppable droppableId="main">
                        {(provided, snapshot) => (
                          <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                            {arr.main.map((item, index) => {
                              return (
                                <Draggable key={item.name} draggableId={item.name} index={index}>
                                  {(provided, snapshot) => (
                                    <div className={snapshot.isDragging ? 'resume-section-wrap component-dragging' : 'resume-section-wrap'}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      key={item.name}>

                                      {getComponent(item.componentType, item, 'main')}
                                      <div className="overlay">
                                        <span className="drag-handle" {...provided.dragHandleProps}>
                                          <OpenWithIcon titleAccess="Grab & Move" />
                                        </span>
                                        <span className="copy-component">
                                          <ContentCopyOutlinedIcon titleAccess="Copy" onClick={(event) => copyComponent(event, item, index, 'main')} />
                                        </span>
                                        <span className="remove-component">
                                          <RemoveOutlinedIcon titleAccess="Remove From Resume" onClick={(event) => removeComponent(event, item, index, 'main')} />
                                        </span>
                                        <span className={item.copy ? 'delete-component' : 'd-none'}>
                                          <DeleteOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'main')} />
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              );
                            }
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </Grid>

                    {resumeSettings.sidebar ?
                      <Grid item xs={5} id="sidebar" sx={{ backgroundColor: resumeSettings.sidebarBackgroundColor, color: resumeSettings.sidebarBodyColor }} className={`${arr.header.length > 0 ? '' : 'padding'}`}>
                        <Droppable droppableId="sidebar">
                          {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content resume-paper-content-draggin-over sidebar-column' : 'resume-paper-content sidebar-column'}>
                              {provided.isDragging}
                              {arr.sidebar.map((item, index) => {
                                return (
                                  <Draggable key={item.name} draggableId={item.name} index={index}>
                                    {(provided, snapshot) => (
                                      <div className={snapshot.isDragging ? 'component-dragging' : 'resume-section-wrap'}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        key={item.name}>
                                        {getComponent(item.componentType, item, 'sidebar')}
                                        <div className="overlay">
                                          <span className="drag-handle" {...provided.dragHandleProps}>
                                            <OpenWithIcon titleAccess="Grab & Move" />
                                          </span>
                                          <span className="copy-component">
                                            <ContentCopyOutlinedIcon titleAccess="Copy" onClick={(event) => copyComponent(event, item, index, 'sidebar')} />
                                          </span>
                                          <span className="remove-component">
                                            <RemoveOutlinedIcon titleAccess="Remove From Resume" onClick={(event) => removeComponent(event, item, index, 'sidebar')} />
                                          </span>
                                          <span className={item.copy ? 'delete-component' : 'd-none'}>
                                            <DeleteOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'sidebar')} />
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                );
                              }
                              )}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </Grid> : null}
                  </div>
                </div>
              </Paper>
              <Box sx={{ height: 30 }} id='resumePageSeparator'></Box>
              {pageTwo ?
                <Paper className={`resume-paper heading-alignment-${resumeSettings.headingAlignment} heading-font-${resumeSettings.headingFontSize} subheading-font-${resumeSettings.subheadingFontSize} body-font-${resumeSettings.bodyFontSize}`} sx={{ fontSize: resumeSettings.bodyFontSize, color: resumeSettings.bodyFontColor }} elevation={3} >
                  <div id="pageTwo">
                    <Grid item xs={12} className={`${arr.header.length > 0 ? '' : 'padding'}`}>
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

                                        {getComponent(item.componentType, item, 'pageTwo')}
                                        <div className="overlay">
                                          <span className="drag-handle" {...provided.dragHandleProps}>
                                            <OpenWithIcon titleAccess="Grab & Move" />
                                          </span>
                                          <span className="copy-component">
                                            <ContentCopyOutlinedIcon titleAccess="Copy" onClick={(event) => copyComponent(event, item, index, 'pageTwo')} />
                                          </span>
                                          <span className="remove-component">
                                            <RemoveOutlinedIcon titleAccess="Remove From Resume" onClick={(event) => removeComponent(event, item, index, 'pageTwo')} />
                                          </span>
                                          <span className={item.copy ? 'delete-component' : 'd-none'}>
                                            <DeleteOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'pageTwo')} />
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
                  </div>
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
                renderInput={(params) => <TextField {...params} placeholder="Filter" variant="standard" />}
              />
            </div>
            <Paper style={{ padding: '20px' }} className="widget-library" elevation={0}>

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

                                {getComponent(item.componentType, item, 'componentLibrary')}
                                <div className="overlay">
                                  <span className="drag-handle" {...provided.dragHandleProps}>
                                    <OpenWithIcon titleAccess="Grab & Move" />
                                  </span>
                                  <span className="copy-component">
                                    <ContentCopyOutlinedIcon titleAccess="Copy" onClick={(event) => copyComponent(event, item, index, 'componentLibrary')} />
                                  </span>
                                  <span className="remove-component">
                                    <AddOutlinedIcon titleAccess="Add to Resume" onClick={(event) => addComponentToResume(event, item, index, 'componentLibrary')} />
                                  </span>
                                  <span className={item.copy ? 'delete-component' : 'd-none'}>
                                    <DeleteOutlinedIcon onClick={(event) => deleteComponent(event, item, index, 'componentLibrary')} />
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
      {resumeHTML}
    </div>
  );
}

export default Builder;