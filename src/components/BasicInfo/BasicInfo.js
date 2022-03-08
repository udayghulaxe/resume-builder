import React from "react";
import {Grid, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';

import './BasicInfo.css'

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.caption,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }));

const BasicInfo = () => {
    return (
        <div className="resume-section resume-section-basic-info">
            <h1 className="basic-info name">Uday Ghulaxe</h1>
            <p className="basic-info current-role">Front-end Developer</p>
            <div>
            <Grid mt={1} 
            container 
            justifyContent="left" 
            alignItems="center" 
            rowSpacing={0.5} 
            columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}>
                <Grid item xs={6}>
                    <Item>
                        <PhoneIcon fontSize="15"></PhoneIcon> 
                        <Box component="span" sx={{ pl: 1}}>8794567161</Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <MailIcon fontSize="15"></MailIcon>
                        <Box component="span" sx={{ pl: 1}}>hello@gmail.com</Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <LanguageIcon fontSize="15"></LanguageIcon>
                        <Box component="span" sx={{ pl: 1}}>www.resume-builder.me</Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <HomeIcon fontSize="15"></HomeIcon>
                        <Box component="span" sx={{ pl: 1}}>Cleverland, OH</Box>
                    </Item>
                </Grid>
            </Grid>
            </div>
        </div>
    );
}

export default BasicInfo;