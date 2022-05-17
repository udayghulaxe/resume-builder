import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button, MenuItem } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import { updateResumeDataReducer } from "../../reducers/resumeDataSlice";

const DividerEditor = (props) => {
	const [editorData, setEditorData] = useState(props.editorData);
	const dispatch = useDispatch();

	const onSave = (event) => {
		dispatch(
			updateResumeDataReducer({ name: props.componentName, column: props.componentColumn, data: editorData })
		);
		closeEditor();
	};

	const closeEditor = () => {
		props.setOpen(false);
	};

	const onStyleChange = (rule, value) => {
		const widgetData = JSON.parse(JSON.stringify(editorData));
		const style = widgetData.styles.find((style) => style.rule === rule);
		style.value = value;
		setEditorData(widgetData);
	};

	return (
		<Dialog maxWidth="sm" fullWidth={true} open={props.open} onClose={closeEditor}>
			<DialogContent>
				<div className="editor-wrap">
					<div className='editor-heading-wrap'>
                        <TextField fullWidth readOnly autoComplete='off' variant="standard" value={editorData.title} />
					</div>
					<div className="editor-options-wrap">
						{editorData.styles.map((style) => {
							return (
								<TextField
									key={style.rule}
									type={style.type}
									select={style.type === "select"}
									label={style.label + (style.unit ? ` (${style.unit})` : "")}
									value={style.value}
									margin="normal"
									onChange={(event) => onStyleChange(style.rule, event.target.value)}
								>
									{style.type === "select" &&
										style.options.map((option) => (
											<MenuItem key={option} value={option}>
												{option}
											</MenuItem>
										))}
								</TextField>
							);
						})}
					</div>
				</div>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeEditor}>Cancel</Button>
				<Button onClick={onSave}>Save</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DividerEditor;
