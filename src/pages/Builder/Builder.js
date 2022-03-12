import React, { useState, lazy, Suspense } from "react";
import logo from '../../logo.svg';
import './Builder.css'
import { AppBar, Box, Toolbar, Link, Paper, Grid, Autocomplete, TextField } from '@mui/material';
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
          path: 'BasicInfo/BasicInfo',
        }
      ],
      main: [
        {
          name: 'Education',
          path: 'Education/Education',
          componentData: {
            title: 'Education',
            items: [
              {
                educationTitle: 'Executive MBA, Engineering Management',
                university: 'The University of Arizona',
                date: '2010 - 2014',
                gpa: 'CGPA 09/10',
              }, 
              {
                educationTitle: 'Engineering Management',
                university: 'The University of California, Berkeley',
                date: '2008 - 2010',
                gpa: 'CGPA 7.5/10',
              }
            ],
          }

        },
        {
          name: 'Experience',
          path: 'Experience/Experience',
          componentData: {
            title: 'Experience',
            items: [
              {
                experienceTitle: 'Android Developer',
                company: 'Google',
                date: '2018 - 2020',
                location: 'New York',
                experienceSummary: 'Worked with team of 5 members and provided end-to-end solutions for clients & Lead developer in 3 key projects of major clients.',
              }, 
              {
                experienceTitle: 'Front End Developer',
                company: 'Amazon',
                date: '2014 - 2018',
                location: 'New York',
                experienceSummary: 'Worked with team of 5 members and provided end-to-end solutions for clients & Lead developer in 4 key projects of major clients.',
              }
            ],
          }
        }
      ],
      sidebar: [
        {
          name: 'Languages',
          path: 'Languages/Languages',
          componentData: {
            title: 'Languages',
            items: [
              {
                language: 'English',
                proficiency: 'Native',
              },
              {
                language: 'Spanish',
                proficiency: 'Intermediate',
              }
            ],
          }
        },
        {
          name: 'Skills',
          path: 'Skills/Skills',
          componentData: {
            title: 'Skills',
            variant: 'outlined',
            items: [
              {
                title: 'Javascript',
              }, 
              {
                title: 'HTML',
              },
              {
                title: 'CSS',
              },
              {
                title: 'Angular',
              },
              {
                title: 'React',
              }
            ],
          }
        }
      ],
      componentLibrary: [
        {
          name: 'Tools',
          path: 'Skills/Skills',
          componentData: {
            title: 'Tools',
            variant: 'filled',
            items: [
              {
                title: 'GIT',
              }, 
              {
                title: 'Webpack',
              },
              {
                title: 'Gulp',
              },
              {
                title: 'Grunt',
              }
            ],
          }
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
                                      <MainColumnComponent componentData={item.componentData}/>
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
                                      <SideBarComponent componentData={item.componentData}/>
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
                                      <WidgetComponent componentData={item.componentData}/>
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