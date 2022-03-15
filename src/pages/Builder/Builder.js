import React, { useState, useEffect, lazy, Suspense } from "react";
import { AppBar, Button, Box, Toolbar, Link, Paper, Grid, Autocomplete, TextField } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import GoogleLogin from '../../components/Login/GoogleLogin'
import { useSelector, useDispatch } from 'react-redux';
import { getResumeDataByUserId, updateResumeDataByUserId } from '../../reducers/resumeDataSlice';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

import './Builder.css'
import logo from '../../logo.svg';

function Builder() {
  
  const {authReducer, resumeDataReducer} = useSelector((state) => state);
  const [arr, setItems] = useState(null);
  const [sidebar, setSidebar] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
      console.log('calling builder effect');
      setItems(resumeDataReducer.resumeData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resumeDataReducer]);
    
  useEffect(() => {
    getResumeData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReducer]);


  function getResumeData() {
    console.log('geting data again');
    dispatch(getResumeDataByUserId(authReducer.userId)).then((res) => {
      setItems(res.payload);
    });

    // if (authReducer.userId) {
    //   console.log(authReducer.userId);
    //   const ref = firebase.firestore().collection('users').doc(authReducer.userId);
    //   ref.get().then((doc) => {
    //     const items = doc.data();
    //     console.log('data', items);
    //     const data = JSON.parse(items.resumeJson);
    //     setItems(data);
    //   });
    // }
    
  }

  function updateResumeData(newData) {
    if (authReducer.userId) {
      dispatch(updateResumeDataByUserId({data:newData, userId: authReducer.userId}));
    }
  }

  let resumeHTML;

  function renderLazyComponent(componentPath) {
    return lazy(() => import(`../../components/${componentPath}`));
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

  if (arr) {
    resumeHTML = <DragDropContext onDragEnd={onDragEnd}>
    <div className="resume-paper-wrap">
      <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="layout-options">
              <span>
                Layout: 
              </span>
              <Box sx={{width: 5}}></Box>
              <WebAssetOutlinedIcon onClick={() => {
                setSidebar(false)
                const newArr = {...arr, main: [...arr['main'], ...arr['sidebar']], sidebar: []};
                setItems(newArr);
                }}></WebAssetOutlinedIcon>
              <Box sx={{width: 8}}></Box>
              <WebOutlinedIcon onClick={() => {setSidebar(true)}}></WebOutlinedIcon>
            </div>
            <Paper className="resume-paper" elevation={3} >
              {/* <Suspense fallback={<div>Loading</div>}>
                {arr.header.map((item, index) => {
                  const BasicInfoComponent = renderLazyComponent(`${item.path}`);
                  return (
                    <BasicInfoComponent key={item.name} />
                  )
                })}  
              </Suspense> */}

              <Droppable droppableId="header">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                      <Suspense fallback={<div>Loading</div>}>
                        {arr.header.map((item, index) => {
                          const HeaderColumnComponent = renderLazyComponent(`${item.path}`);
                          return (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div className={snapshot.isDragging ? 'component-dragging' : 'resume-section-wrap'} 
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    key={item.name}>
                                  <span className="drag-handle" {...provided.dragHandleProps}>
                                    <DragIndicatorIcon/>
                                  </span>
                                  <HeaderColumnComponent componentColumn='header' componentItem={item}/>
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
              <Grid container spacing={1}>
                <Grid item xs={sidebar ? 7 : 12}>
                <Droppable droppableId="main">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                      <Suspense fallback={<div>Loading</div>}>
                        {arr.main.map((item, index) => {
                          const MainColumnComponent = renderLazyComponent(`${item.path}`);
                          return (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div className={snapshot.isDragging ? 'component-dragging' : 'resume-section-wrap'} 
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    key={item.name}>
                                  <span className="drag-handle" {...provided.dragHandleProps}>
                                    <DragIndicatorIcon/>
                                  </span>
                                  <MainColumnComponent componentColumn='main' componentItem={item}/>
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
                <Grid item xs={5}>
                <Droppable droppableId="sidebar" className="">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over sidebar-column' : 'resume-paper-content sidebar-column'}>
                      {provided.isDragging}
                      <Suspense fallback={<div>Loading</div>}>
                        {arr.sidebar.map((item, index) => {
                          const SideBarComponent = renderLazyComponent(`${item.path}`);
                          return (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div className={snapshot.isDragging ? 'component-dragging' : 'resume-section-wrap'}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      key={item.name}>
                                  <span className="drag-handle" {...provided.dragHandleProps}>
                                    <DragIndicatorIcon/>
                                  </span> 
                                  <SideBarComponent componentColumn='sidebar' componentItem={item}/>
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
          </Grid>
          <Grid item xs={4}>
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
                          const WidgetComponent = renderLazyComponent(`${item.path}`);
                          return (
                            <Draggable key={item.name} draggableId={item.name} index={index}>
                              {(provided, snapshot) => (
                                <div className={snapshot.isDragging ? 'component-dragging' : 'resume-section-wrap'}
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      key={item.name}>
                                  <span className="drag-handle" {...provided.dragHandleProps}>
                                    <DragIndicatorIcon/>
                                  </span> 
                                  <WidgetComponent componentColumn='componentLibrary' componentItem={item}/>
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
    resumeHTML = <div>Loading...</div>;
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