import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import SocialEditor from "./SocialEditor";

import './Social.css'
const Social = (props) => {
    const [open, setOpen] = useState(false);
    console.log('calling Social', open);
    
    const  openEditor = () => {
        setOpen(true);
    }


    return (
        <div className="resume-section resume-section-Social">
            <div className="resume-section-title">
                <span>{props.componentItem.componentData.title}</span>
                <span className="edit-component-icon">
                    <EditIcon onClick={openEditor} />
                </span>
            </div>   
            
            <div className="social-item-wrap">
                {props.componentItem.componentData.items.map((item, index) => {
                    return (
                        <div className='social-item' key={index}>
                            <div className='social-platform resume-section-subtitle'>{item.socialPlatform}</div>
                            <div className='social-username'>{item.username}</div>
                        </div>
                        
                    );
                })}
            </div>


            <SocialEditor open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={props.componentItem.componentData} />
        </div>
    );
}

export default React.memo(Social);