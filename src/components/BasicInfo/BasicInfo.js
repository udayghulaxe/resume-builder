import React, { useState } from "react";
import {Grid, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';

import BasicInfoEditor from "./BasicInfoEditor";

import './BasicInfo.css'

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.caption,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center'
  }));

const BasicInfo = (props) => {
    const [open, setOpen] = useState(false);

    const  openEditor = () => {
        setOpen(true);
    }
    return (
        <div className="resume-section resume-section-basic-info">
            {/* <span className="basic-info name">{props.componentItem.componentData.fullName}</span>
            <span className="edit-component-icon">
                <EditIcon onClick={openEditor} />
            </span> */}

            <div className="basic-section-title">
                <span className="basic-info name">{props.componentItem.componentData.fullName}</span>
                <span className="edit-component-icon">
                    <EditIcon onClick={openEditor} />
                </span>
            </div>
            <p className="basic-info current-role">{props.componentItem.componentData.currentRole}</p>
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
                        <Box component="span" sx={{ pl: 1}}>{props.componentItem.componentData.phone}</Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <MailIcon fontSize="15"></MailIcon>
                        <Box component="span" sx={{ pl: 1}}>{props.componentItem.componentData.email}</Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <LanguageIcon fontSize="15"></LanguageIcon>
                        <Box component="span" sx={{ pl: 1}}>{props.componentItem.componentData.website}</Box>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <HomeIcon fontSize="15"></HomeIcon>
                        <Box component="span" sx={{ pl: 1}}>{props.componentItem.componentData.address}</Box>
                    </Item>
                </Grid>
            </Grid>
            </div>

            <BasicInfoEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />
        </div>
    );
}

export default  React.memo(BasicInfo);