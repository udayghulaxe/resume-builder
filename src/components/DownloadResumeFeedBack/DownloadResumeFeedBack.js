import React from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import {
    EmailShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton
} from 'react-share';

import {
    EmailIcon,
    WhatsappIcon,
    LinkedinIcon,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon
} from 'react-share';
import './DownloadResumeFeedBack.css';

const DownloadResumeFeedBack = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className='feedback-container'>
                <Grid item xs={12} className='download-section'>
                    <Box className='feedback-heading-container'>
                        <div className='feedback-heading'>
                            <Box sx={{ width: '30px', height: '30px', marginRight: '10px' }}>
                                {props.downloading ? <CircularProgress sx={{marginBottom: '2px'}} size={30} /> : <CheckCircleOutlineOutlinedIcon color='success' sx={{paddingBottom: '2px'}} fontSize={'large'}></CheckCircleOutlineOutlinedIcon>}
                            </Box>{' '}
                            {props.downloading ? 'Downloading Your Resume ...' : 'Resume Downloaded'}
                        </div>
                    </Box>
                    <Box className='feedback-heading-container'>
                        {/* <div className='feedback-heading'>Feedback</div> */}
                    </Box>
                    <Box className='share-container'>
                        <div className='share-title'>Recommend Resume Builder To A Friend.</div>
                        <div className='share-button-container'>
                        <div className='share-button'>
                            <EmailShareButton url={'https://resume-builder.udayghulaxe.me/'}>
                                <EmailIcon size={32} round={true} />
                            </EmailShareButton>
                        </div>
                        <div className='share-button'>
                            <WhatsappShareButton url={'https://resume-builder.udayghulaxe.me/'}>
                                <WhatsappIcon size={32} round={true} />
                            </WhatsappShareButton>
                        </div>
                        <div className='share-button'>
                            <LinkedinShareButton url={'https://resume-builder.udayghulaxe.me/'}>
                                <LinkedinIcon size={32} round={true} />
                            </LinkedinShareButton>
                        </div>
                        <div className='share-button'>
                            <FacebookShareButton url={'https://resume-builder.udayghulaxe.me/'}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                        </div>
                        <div className='share-button'>
                            <TwitterShareButton url={'https://resume-builder.udayghulaxe.me/'}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                        </div>
                        <div className='share-button'>
                            <TelegramShareButton url={'https://resume-builder.udayghulaxe.me/'}>
                                <TelegramIcon size={32} round={true} />
                            </TelegramShareButton>
                        </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default React.memo(DownloadResumeFeedBack);
