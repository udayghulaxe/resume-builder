import React, {useState, lazy, Suspense} from "react";
import logo from '../../logo.svg';
import './Builder.css'
import {AppBar, Box, Toolbar, Link, Paper} from '@mui/material';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move
} from "react-grid-dnd";

// import BasicInfo from "../../components/BasicInfo/BasicInfo";
// import Education from "../../components/Education/Education";
// import Experience from "../../components/Experience/Experience";
// import Skills from "../../components/Skills/Skills";
// import Achievement from "../../components/Achievements/Achievement";
// import Languages from "../../components/Languages/Language";

function Builder() {
  const [items, setItems] = React.useState({
    left: [
      { id: 1, name: "ben" },
      { id: 2, name: "joe" },
      { id: 3, name: "jason" },
      { id: 4, name: "chris" },
      { id: 5, name: "heather" },
      { id: 6, name: "Richard" }
    ],
  });
 
  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1]
      });
    }
 
    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result
    });
  }

  const arr = [
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
  ];

  function renderLazyComponent(componentPath) {
    return lazy(() => import(`../../components/${componentPath}`));
 }

  return (
    <div className="builder-wrap">
      <Box sx={{ flexGrow: 1 }}>
          <AppBar elevation={0} className="global-header" color="inherit" position="fixed">
              <Toolbar>
                  <img src={logo} className="header-logo" alt="Resume Builder"/>
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
          
      <div className="resume-paper-wrap">
          <Paper className="resume-paper" elevation={3} >
            <div className="resume-paper-content">
              {/* Lazy Load All components dynamically  */}
              <Suspense fallback={<div>Loading</div>}>
                {arr.map((item) => {
                    const Comp = renderLazyComponent(`${item.path}`);
                    return <Comp key={item.name}/>
                  } 
                )}
              </Suspense>
            </div>
          </Paper>
      </div>
{/* 
          <GridContextProvider onChange={onChange}>
            <div className="drop-container">
              <GridDropZone
                className="dropzone left"
                id="left"
                boxesPerRow={4}
                rowHeight={200}
              >
                {items.left.map(item => (
                  <GridItem key={item.name}>
                    <div className="grid-item" style={{cursor: 'grab'}}>
                    <BasicInfo></BasicInfo>
                    </div>
                  </GridItem>
                ))}
              </GridDropZone>
            </div>
          </GridContextProvider> */}
    </div>
  );
}

export default Builder;