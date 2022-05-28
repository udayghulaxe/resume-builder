import React from 'react';
import { Container, Box, Grid, Button } from '@mui/material';
import Slider from 'react-slick';
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
    const resumeTemplates = [
        {
            id: 1,
            name: 'Resume Template 1',
            image: '/resume-templates/resume-template-1.jpg',
            category: 'Resume Templates',
            tags: ['Resume', 'Template', '1'],
        },
        {
            id: 2,
            name: 'Resume Template 2',
            image: '/resume-templates/resume-template-2.jpg',
            category: 'Resume Templates',
            tags: ['Resume', 'Template', '2'],
        },
        {
            id: 3,
            name: 'Resume Template 3',
            image: '/resume-templates/resume-template-3.jpg',
            category: 'Resume Templates',
            tags: ['Resume', 'Template', '3'],
        },
        {
            id: 4,
            name: 'Resume Template 4',
            image: '/resume-templates/resume-template-4.jpg',
            category: 'Resume Templates',
            tags: ['Resume', 'Template', '4'],
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                },
            },
        ],
    };

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

                {/* SLIDER CONTAINER */}
                <Grid
                    container
                    columnSpacing={{ xs: 1, sm: 5, md: 5 }}
                    className='template-container'
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item xs={12} md={12}>
                        <h2 className='template-container-heading'>Our Creative Templates</h2>
                        <p className='template-container-subheading container-subheading'>
                            Choose a template and customize it quickly
                        </p>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Slider {...settings}>
                            {resumeTemplates.map((template, index) => (
                                <div className='resume-template-slide' key={index}>
                                    <div
                                        className='resume-template-slide-image'
                                        style={{ backgroundImage: `url(${template.image})` }}
                                    ></div>
                                </div>
                            ))}
                        </Slider>
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
                        <h2 className='feature-container-heading'>Create your job-winning resume in minutes</h2>
                        <p className='feature-container-subheading container-subheading'>
                            Boost your chances of landing a dream job
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
