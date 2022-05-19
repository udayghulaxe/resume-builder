import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DividerEditor from "./DividerEditor";

import "./Divider.css";

const Divider = (props) => {
	const [open, setOpen] = useState(false);

	const styles = {};
	props.componentItem.componentData.styles.forEach((style) => {
		styles[style.rule] = style.value + style.unit;
	});

	const title = (
		<div className="resume-section-title border-none">
			<span>{props.componentItem.componentData.title}</span>
		</div>
	);

	return (
		<div className="resume-section">
			{props.componentColumn === "componentLibrary" && title}

			<span className="edit-component-icon">
				<EditIcon onClick={(open) => setOpen(true)} />
			</span>

			<div className="divider-wrapper">
				<hr style={styles} />
			</div>

			<DividerEditor
				open={open}
				setOpen={setOpen}
				componentColumn={props.componentColumn}
				componentName={props.componentItem.name}
				editorData={props.componentItem.componentData}
			/>
		</div>
	);
};

export default React.memo(Divider);
