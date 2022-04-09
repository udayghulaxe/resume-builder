import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { getUserDataByUserId, createNewReumseByUserId, updateUserResumeDataByUserId, deleteResumeByResumeId, copyResumeByResumeId } from '../../reducers/userDataSlice';
import { Button, Grid, CircularProgress, Box, LinearProgress, Dialog, DialogContent } from '@mui/material';
import { useHistory } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import resumeSvg from '../../assets/images/resume-2.svg';
import './Resumes.css'

const Resumes = () => {
  const {authReducer, userDataReducer} = useSelector((state) => state);
  const [userData, setUserData] = useState(null);
  const [userResumes, setUserResumes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [previewResumeImageSrc, setPreviewResumeImageSrc] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if(authReducer.userId) {
      console.log('calling resume auth effect');
      getUserData();
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReducer]);

  // useEffect(() => {
  //   console.log('calling resume effect');
  //   setUserData(userDataReducer.userData);
  //   //setUserResumes(userDataReducer.userData.userResumes);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userDataReducer]);

  const closeEditor = () => {
    setOpen(false);
  };

  const previewResume = (resumeImage) => {
    setOpen(true);
    setPreviewResumeImageSrc(resumeImage);
  }


  const getUserData = () => {
    dispatch(getUserDataByUserId(authReducer.userId)).then((res) => {
      if (res.payload) {
        setUserData(res.payload);
        setUserResumes(JSON.parse(res.payload.userResumes));
      }
    });
  }

  const getUniqueId = () => {
    return Math.floor(Math.random() * Date.now());
  }

  const createNewResume = () => {
    setIsLoading(true);
    const uniqueId = getUniqueId();

    if (authReducer.userId) {
      dispatch(createNewReumseByUserId({data:userResumes, userData: userData, uniqueId: uniqueId})).then((res) => {
        setUserResumes(res.payload);
        setIsLoading(false);
        history.push(`builder/${uniqueId}`);
      });
    }
  }

  const onDeleteResume = (resumeId) => {
    setIsLoading(true);
    const userResumeData = JSON.parse(JSON.stringify(userResumes));
    const newResumeData = userResumeData.filter((item) => item.resumeId !== resumeId);

    dispatch(deleteResumeByResumeId(resumeId));
    
    setUserResumes(newResumeData);
    dispatch(updateUserResumeDataByUserId({userId: authReducer.userId, data: JSON.stringify(newResumeData)})).then((res) => {
      setIsLoading(false);
    });

  }

  const onDuplicateResume = (resumeId) => {
    setIsLoading(true);
    const uniqueId = getUniqueId();
    const userResumeData = JSON.parse(JSON.stringify(userResumes));
    const copyFrom = userResumeData.filter((item) => item.resumeId === resumeId)[0];
    userResumeData.push({
      resumeId: uniqueId.toString(),
      resumeName: `${copyFrom.resumeName} (copy)`,
      resumeImage: copyFrom.resumeImage,
    });
    
    dispatch(updateUserResumeDataByUserId({userId: authReducer.userId, data: JSON.stringify(userResumeData)}));
    dispatch(copyResumeByResumeId({resumeId: resumeId, uniqueId: uniqueId})).then((res) => {
      setUserResumes(userResumeData);
      setIsLoading(false);
    });
  }

  return (
    <div className="user-resumes-wrap">

      <Dialog open={open} onClose={closeEditor} scroll='body'>
        <DialogContent className="preview-dialog-content">
          <img alt="Resume Preview" className="resume-preview" src={previewResumeImageSrc}/>
        </DialogContent>
      </Dialog>


      <div className="resume-header">
        <h1>My Resumes</h1>
        {userResumes && userResumes.length <= 1 && <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            size="small"
            onClick={createNewResume}
            variant="contained"
            color="primary" 
            disableElevation
            className="header-create-resume-button">
                New Resume
        </Button>}
      </div>
      <LinearProgress className={isLoading ? '' : 'd-none'} color="primary" />

       
      {userResumes ?
        userResumes.length > 0 ?
          <div className="user-resume-list-wrap">
            {
              userResumes.map((item, index) => {
                return (
                    <div className='resume-item' key={index}>
                      
                      <div className="resume-thumbnail" style={{backgroundImage: `url(${item.resumeImage})`}}> </div>
                      <div className="resume-actions">
                        <div className="resume-action-item name">
                          <span>{item.resumeName}</span>
                        </div>
                        <div className="resume-action-item date">
                          <span>Feb 2, 2020 2.45 PM</span>
                        </div>
                        <Box sx={{height: '40px'}}></Box>
                        {/* EDIT ACTION */}
                        <div className="resume-action-item link" onClick={() => { history.push(`builder/${item.resumeId}`); }}>
                          <span className="resume-action-item-link-icon">
                            <EditOutlinedIcon />
                          </span>
                          <span className="resume-action-item-link-text">
                            Edit
                          </span>
                        </div>

                        {/* DELETE ACTION */}
                        <div className="resume-action-item link" onClick={() => { onDeleteResume(item.resumeId) }}>
                          <span className="resume-action-item-link-icon">
                            <DeleteOutlinedIcon />
                          </span>
                          <span className="resume-action-item-link-text">
                            Delete
                          </span>
                        </div>

                        {/* COPY ACTION */}
                        { userResumes.length <= 1 && 
                        <div className={`resume-action-item link ${isLoading ? 'item-disabled' : ''}`} onClick={() => { onDuplicateResume(item.resumeId); }}>
                          <span className="resume-action-item-link-icon">
                            <CopyAllOutlinedIcon />
                          </span>
                          <span className="resume-action-item-link-text">
                            Duplicate
                          </span>
                        </div>
                        }

                        {/* PREVIEW ACTION */}
                        <div className="resume-action-item link" onClick={() => { previewResume(item.resumeImage); }}>
                          <span className="resume-action-item-link-icon">
                            <VisibilityOutlinedIcon />
                          </span>
                          <span className="resume-action-item-link-text">
                            Preview
                          </span>
                        </div>

                        {/* SHARE ACTION */}
                        <div className="resume-action-item link">
                          <span className="resume-action-item-link-icon">
                            <ShareOutlinedIcon />
                          </span>
                          <span className="resume-action-item-link-text">
                            Share
                          </span>
                        </div>
                      </div>
                    </div>
                );
              })
            }
          </div>
          :
          <Grid
            container
            className="no-resume-wrap"
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center" item xs={3}>
              <div className="no-resume-text">No resume created, please create one.</div>
              <img className="no-resume-img" alt="Create Resume" src={resumeSvg} />
            </Grid>   
          </Grid>
      :
      <Grid
            container
            className="no-resume-wrap"
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
              <CircularProgress />
      </Grid>
    }
    </div>
  );
}

export default Resumes;