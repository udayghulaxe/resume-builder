import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@mui/material";
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
					<div className="editor-heading-wrap">
						<h1>{editorData.title}</h1>
					</div>
					<div className="editor-options-wrap">
						{editorData.styles.map((style) => {
							return (
								<TextField
									key={style.rule}
									type="number"
									label={style.label + ` (${style.unit})`}
									value={style.value}
									margin="normal"
									onChange={(event) => onStyleChange(style.rule, event.target.value)}
								/>
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
