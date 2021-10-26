import React, { useState, lazy, Suspense } from "react";
import logo from '../../logo.svg';
import './Builder.css'
import { AppBar, Box, Toolbar, Link, Paper } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// import BasicInfo from "../../components/BasicInfo/BasicInfo";
// import Education from "../../components/Education/Education";
// import Experience from "../../components/Experience/Experience";
// import Skills from "../../components/Skills/Skills";
// import Achievement from "../../components/Achievements/Achievement";
// import Languages from "../../components/Languages/Language";

function Builder() {
  const [arr, setItems] = useState([
    {
      name: 'BasicInfo',
      path: 'BasicInfo/BasicInfo'
    },
    {
      name: 'Education',
      path: 'Education/Education'
    },
    {
      name: 'Experience',
      path: 'Experience/Experience',
    },
    {
      name: 'Skills',
      path: 'Skills/Skills',
    },
    {
      name: 'Languages',
      path: 'Languages/Languages',
    }
  ]);

  function renderLazyComponent(componentPath) {
    return lazy(() => import(`../../components/${componentPath}`));
  }

  function onDragEnd(result) {
    console.log(result);
    const { destination, source, draggableId } = result;
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }

    const newArr = Array.from(arr);
    newArr.splice(source.index, 1);
    newArr.splice(destination.index, 0, arr.filter(x => x.name === draggableId)[0]);
    setItems(newArr);
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
          <Paper className="resume-paper" elevation={3} >
            <Droppable droppableId="columnLeft">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="resume-paper-content">
                  <Suspense fallback={<div>Loading</div>}>
                    {arr.map((item, index) => {
                      const Comp = renderLazyComponent(`${item.path}`);
                      return (
                        <Draggable key={item.name} draggableId={item.name} index={index}>
                          {(provided, snapshot) => (
                            <div className={snapshot.isDragging ? 'component-dragging' : 'idel'} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={item.name}>
                              <Comp />
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

        </div>
      </DragDropContext>
    </div>
  );
}

export default Builder;