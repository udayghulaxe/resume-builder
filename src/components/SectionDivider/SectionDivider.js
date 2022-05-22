import React, { useState } from 'react';
import { Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import './SectionDivider.css';
const SectionDivider = props => {
    const [open, setOpen] = useState(false);
    console.log('calling section divider', open);

    const openEditor = () => {
        setOpen(true);
    };

    return (
        <div className='resume-section resume-section-devider'>
            <div className='resume-section-title'>
                <span>{props.componentItem.componentData.title}</span>
                <span className='edit-component-icon'>
                    <EditIcon onClick={openEditor} />
                </span>
            </div>

            <div className='divider-item-wrap'>
                <Divider></Divider>
            </div>
        </div>
    );
};

export default React.memo(SectionDivider);
