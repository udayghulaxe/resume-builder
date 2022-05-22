import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOpenEditorName } from '../../reducers/resumeDataSlice';
import EditIcon from '@mui/icons-material/Edit';
import SocialEditor from "./SocialEditor";

import './Social.css'
const Social = (props) => {
	const [open, setOpen] = useState(false);
	console.log('calling Social', open);

	const [widgetData, setWidgetData] = useState(props.componentItem.componentData);

	const dispatch = useDispatch();
	const openEditorName = useSelector(state => state.resumeDataReducer.openEditorName);

	const openEditor = () => {
		dispatch(updateOpenEditorName(props.componentItem.name));
		setOpen(true);
	}


	return (
		<div className="resume-section resume-section-Social">
			<div className="resume-section-title">
				<span>{widgetData.title}</span>
				<span className="edit-component-icon">
					<EditIcon onClick={openEditor} />
				</span>
			</div>

			<div className="social-item-wrap">
				{widgetData.items.map((item, index) => {
					return (
						<div className='social-item' key={index}>
							<div className='social-platform resume-section-subtitle'>{item.socialPlatform}</div>
							<div className='social-username'>{item.username}</div>
						</div>

					);
				})}
			</div>


			{
        openEditorName === props.componentItem.name ? <SocialEditor setWidgetData={setWidgetData} open={open} setOpen={setOpen} componentColumn={props.componentColumn} componentName={props.componentItem.name} editorData={widgetData} /> : null
			}
		</div>
	);
}

export default React.memo(Social);