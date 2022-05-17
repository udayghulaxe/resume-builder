import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DividerEditor from "./DividerEditor";

const Divider = (props) => {
	const [open, setOpen] = useState(false);
	const widgetData = props.componentItem.componentData;

	const styles = {};
	widgetData.styles.forEach((style) => {
		styles[style.rule] = style.value + style.unit;
	});

	return (
		<div className="resume-section">
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

// export default React.memo(Divider);
export default Divider;
