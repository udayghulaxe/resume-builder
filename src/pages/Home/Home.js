import React from 'react';
import { Container, Box, Grid, Button } from '@mui/material';
import heroImage from './../../assets/images/hero.jpg';

import dragIcon from './../../assets/icons/icons-drag.png';
import documentsIcon from './../../assets/icons/icons-documents.png';
import editIcon from './../../assets/icons/icons-edit.png';
import moneyIcon from './../../assets/icons/icons-money.png';
import themeIcon from './../../assets/icons/icons-themes.png';
import editPrivacy from './../../assets/icons/icons-privacy.png';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <Container className='home-container'>
            <Box sx={{ flexGrow: 1 }}>
                {/* HERO CONTAINER */}
                <Grid container spacing={2} className='hero-container'>
                    <Grid item xs={12} md={6}>
                        <Box className='home-heading-container'>
                            <h1>
                                Let your <span>resume</span> do the talking for you
                            </h1>
                            <div className='hero-subheading container-subheading'>
                                Set yourself apart with a modern resume. Expert tips, customizable templates & quick PDF
                                download included.
                            </div>
                            <Button
                                component={NavLink}
                                to='/resumes'
                                className='hero-get-started'
                                variant='contained'
                                color='primary'
                                size='large'
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className='home-hero-image-container'>
                        <img className='hero-image' src={heroImage} alt='Hero' />
                    </Grid>
                </Grid>

                {/* FEATURES CONTAINER */}
                <Grid
                    container
                    columnSpacing={{ xs: 1, sm: 5, md: 5 }}
                    className='feature-container'
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item xs={12} md={12}>
                        <h2 className='feature-container-heading'>A better way to build your resume</h2>
                        <p className='feature-container-subheading container-subheading'>
                            More flexible than templates, easier than using a word processor
                        </p>
                    </Grid>
                    <Grid item xs={12} md={6} className='feature-box'>
                        <div>
                            <img className='feature-box-icon' alt='Drag & Drop Components' src={dragIcon} />
                        </div>
                        <div className='feature-box-heading'>Drag & Drop Components</div>
                        <div className='feature-box-description'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className='feature-box'>
                        <div>
                            <img className='feature-box-icon' alt='Multiple Resumes' src={documentsIcon} />
                        </div>
                        <div className='feature-box-heading'>Multiple Resumes</div>
                        <div className='feature-box-description'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} className='feature-box'>
                        <div>
                            <img className='feature-box-icon' alt='Effortless live editing' src={editIcon} />
                        </div>
                        <div className='feature-box-heading'>Effortless live editing</div>
                        <div className='feature-box-description'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className='feature-box'>
                        <div>
                            <img className='feature-box-icon' alt='Free, as in Free' src={moneyIcon} />
                        </div>
                        <div className='feature-box-heading'>Free, as in Free</div>
                        <div className='feature-box-description'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} className='feature-box'>
                        <div>
                            <img className='feature-box-icon' alt='Templates That Stand Out' src={themeIcon} />
                        </div>
                        <div className='feature-box-heading'>Templates That Stand Out</div>
                        <div className='feature-box-description'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className='feature-box'>
                        <div>
                            <img className='feature-box-icon' alt='Data Privacy' src={editPrivacy} />
                        </div>
                        <div className='feature-box-heading'>Data Privacy</div>
                        <div className='feature-box-description'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
