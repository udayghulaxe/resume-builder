import React, { useState, lazy, Suspense } from "react";
import logo from '../../logo.svg';
import './Builder.css'
import { AppBar, Box, Toolbar, Link, Paper, Grid } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// import BasicInfo from "../../components/BasicInfo/BasicInfo";
// import Education from "../../components/Education/Education";
// import Experience from "../../components/Experience/Experience";
// import Skills from "../../components/Skills/Skills";
// import Achievement from "../../components/Achievements/Achievement";
// import Languages from "../../components/Languages/Language";

function Builder() {
  const [arr, setItems] = useState(
    {
      header: [
        {
          name: 'BasicInfo',
          path: 'BasicInfo/BasicInfo'
        }
      ],
      main: [
        {
          name: 'Education',
          path: 'Education/Education'
        },
        {
          name: 'Experience',
          path: 'Experience/Experience'
        }
      ],
      sidebar: [
        {
          name: 'Languages',
          path: 'Languages/Languages'
        },
        {
          name: 'Skills',
          path: 'Skills/Skills'
        }
      ],
      full: [
        {
          name: 'Languages2',
          path: 'Languages/Languages'
        },
      ]
    }
  );

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
        console.log(newColumn);
        setItems(newColumn);
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
    }
  }

  // const Item = styled(Box)(({ theme }) => ({
  //   ...theme.typography.caption,
  //   textAlign: 'left',
  //   display: 'flex',
  //   alignItems: 'center',
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <div className="builder-wrap">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} className="global-header" color="inherit" position="fixed">
          <Toolbar>
            <img src={logo} className="header-logo" alt="Resume Builder" />
            <div>
              <Link underline="none" className="builder-header-menu-link active" href="#">About</Link>
              <Link underline="none" className="builder-header-menu-link" href="#">Experience</Link>
              <Link underline="none" className="builder-header-menu-link" href="#">Education</Link>
              <Link underline="none" className="builder-header-menu-link" href="#">Skills</Link>
              <Link underline="none" className="builder-header-menu-link" href="#">Languages</Link>
              <Link underline="none" className="builder-header-menu-link" href="#">Achievement</Link>
              <Link underline="none" className="builder-header-menu-link" href="#">Languages</Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="resume-paper-wrap">
          <Grid container spacing={2}>
              <Grid item xs={8}>
                <Paper className="resume-paper" elevation={3} >
                  <Suspense fallback={<div>Loading</div>}>
                    {arr.header.map((item, index) => {
                      const BasicInfoComponent = renderLazyComponent(`${item.path}`);
                      return (
                        <BasicInfoComponent key={item.name} />
                      )
                    })}  
                  </Suspense>
                  <Grid container spacing={1}>
                    <Grid item xs={arr.sidebar.length ? 7 : 12}>
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
                                      <MainColumnComponent/>
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
                    
                    {arr.sidebar.length ? 
                    <Grid item xs={5}>
                    <Droppable droppableId="sidebar">
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
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
                                      <SideBarComponent />
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
                <Paper style={{padding: '20px'}} className="widget-library" elevation={0}>

                <Droppable droppableId="full">
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={snapshot.isDraggingOver ? 'resume-paper-content-draggin-over' : 'resume-paper-content'}>
                          {provided.isDragging}
                          <Suspense fallback={<div>Loading</div>}>
                            {arr.full.map((item, index) => {
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
                                      <WidgetComponent />
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
      </DragDropContext>
    </div>
  );
}

export default Builder;