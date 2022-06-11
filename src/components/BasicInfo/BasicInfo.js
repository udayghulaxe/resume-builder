import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';

import BasicInfoEditor from './BasicInfoEditor';

import './BasicInfo.css';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.caption,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
}));

const BasicInfo = props => {
    const [widgetData, setWidgetData] = useState(props.componentItem.componentData);

    const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);
    return (
        <div className='resume-section resume-section-basic-info'>
            <div className='basic-section-title'>
                <span className='basic-info name resume-name'>{widgetData.fullName}</span>
            </div>
            <p className='basic-info current-role resume-current-role'>{widgetData.currentRole}</p>
            <div>
                <Grid
                    mt={1}
                    container
                    justifyContent='left'
                    alignItems='center'
                    rowSpacing={0.5}
                    columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}
                >
                    {widgetData.phone && (
                        <Grid item xs={6}>
                            <Item>
                                <PhoneIcon fontSize='15'></PhoneIcon>
                                <Box component='span' sx={{ pl: 1 }}>
                                    {widgetData.phone}
                                </Box>
                            </Item>
                        </Grid>
                    )}
                    {widgetData.email && (
                        <Grid item xs={6}>
                            <Item>
                                <MailIcon fontSize='15'></MailIcon>
                                <Box component='span' sx={{ pl: 1 }}>
                                    {widgetData.email}
                                </Box>
                            </Item>
                        </Grid>
                    )}
                    {widgetData.website && (
                        <Grid item xs={6}>
                            <Item>
                                <LanguageIcon fontSize='15'></LanguageIcon>
                                <Box component='span' sx={{ pl: 1 }}>
                                    {widgetData.website}
                                </Box>
                            </Item>
                        </Grid>
                    )}
                    {widgetData.address && (
                        <Grid item xs={6}>
                            <Item>
                                <HomeIcon fontSize='15'></HomeIcon>
                                <Box component='span' sx={{ pl: 1 }}>
                                    {widgetData.address}
                                </Box>
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </div>

            {openEditorName === props.componentItem.name ? (
                <BasicInfoEditor
                    setWidgetData={setWidgetData}
                    componentColumn={props.componentColumn}
                    componentName={props.componentItem.name}
                    editorData={widgetData}
                />
            ) : null}
        </div>
    );
};

export default React.memo(BasicInfo);
