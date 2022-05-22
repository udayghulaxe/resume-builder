import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TextField, Button, Divider, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateResumeDataReducer } from "../../reducers/resumeDataSlice";
import { richEditorSettings } from "../../globals.js";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ExperienceEditor = (props) => {
  const [editorData, setEditorData] = useState(props.editorData);
  const dispatch = useDispatch();

  const onWidgetDataChange = (key, newValue) => {
    const newData = { ...editorData, [key]: newValue };
    setEditorData(newData);
    props.setWidgetData(newData);
  }

  const onSave = (event) => {
    const newData = { ...editorData, items: editorData.items.filter(
      (item, index) => item.experienceTitle.length > 0
    ) };
    dispatch(
      updateResumeDataReducer({
        name: props.componentName,
        column: props.componentColumn,
        data: newData,
      })
    );
    closeEditor();
    console.log(editorData);
  };

  const onTitleChange = (event) => {
    const newVal = event.target.value;
    onWidgetDataChange("title", newVal);
  };

  const onFieldChange = (event, index, property) => {
    const newValue = event.target.value;
    let newExperienceItems = [...editorData.items];
    newExperienceItems[index] = {
      ...newExperienceItems[index],
      [property]: newValue,
    };
    onWidgetDataChange("items", newExperienceItems);
  };

  const onSummaryChange = (val, index) => {
    let newExperienceItems = [...editorData.items];
    newExperienceItems[index] = {
      ...newExperienceItems[index],
      experienceSummary: val,
    };
    onWidgetDataChange("items", newExperienceItems);
  }

  const onAddExperience = (event, index) => {
    let newExperienceItems = [...editorData.items];
    newExperienceItems.splice(index + 1, 0, {
      experienceTitle: "",
      company: "",
      date: "",
      location: "",
      experienceSummary: "",
    });
    onWidgetDataChange("items", newExperienceItems);
  };

  const onDeleteExperience = (event, index) => {
    let newExperienceItems = [...editorData.items];
    newExperienceItems.splice(index, 1);
    onWidgetDataChange("items", newExperienceItems);
  };

  const closeEditor = () => {
    props.setOpen(false);
  };

  return ReactDOM.createPortal(

    <div className="editor-wrap">
      <div className="editor-section-header">
        <Button variant="contained" size="small" onClick={onSave} disabled={!editorData.items.filter(item => item.experienceTitle.length > 0).length} >Save Changes</Button>
        <Button variant="outlined" size="small" onClick={closeEditor}>Close</Button>
      </div>
      <div className="editor-heading-wrap">
        <TextField
          fullWidth
          label="Title"
          autoComplete="off"
          onChange={onTitleChange}
          value={editorData.title}
          variant="standard"
        />
      </div>

      <div className="editor-items-wrap">
        {editorData.items.map((item, index) => {
          return (
            <div key={index}>
              <div className="editor-item">
                <div>
                  <TextField
                    label="Job Role"
                    sx={{ mb: 1, mt: 1, mr: 1 }}
                    onChange={(event) =>
                      onFieldChange(event, index, "experienceTitle")
                    }
                    value={item.experienceTitle}
                    inputProps={{ style: { fontSize: 14 } }}
                    size="small"
                  />

                  <TextField
                    label="Company"
                    sx={{ mb: 1, mt: 1, mr: 1 }}
                    onChange={(event) =>
                      onFieldChange(event, index, "company")
                    }
                    value={item.company}
                    inputProps={{ style: { fontSize: 14 } }}
                    size="small"
                  />

                  <TextField
                    label="Date (From - To)"
                    sx={{ mb: 1, mt: 1, mr: 1 }}
                    onChange={(event) =>
                      onFieldChange(event, index, "date")
                    }
                    value={item.date}
                    inputProps={{ style: { fontSize: 14 } }}
                    size="small"
                  />

                  <TextField
                    label="location"
                    sx={{ mb: 1, mt: 1, mr: 1 }}
                    onChange={(event) =>
                      onFieldChange(event, index, "location")
                    }
                    value={item.location}
                    inputProps={{ style: { fontSize: 14 } }}
                    size="small"
                  />


                  <ReactQuill
                    defaultValue={item.experienceSummary}
                    modules={richEditorSettings}
                    theme={"snow"}
                    onChange={(val) =>
                      onSummaryChange(val, index)
                    } />
                </div>
                <AddCircleIcon
                  onClick={(event) => onAddExperience(event, index)}
                  className="add-item-icon"
                ></AddCircleIcon>
                <DeleteForeverIcon
                  onClick={(event) => onDeleteExperience(event, index)}
                  className={`delete-item-icon ${index === 0 ? "d-none" : ""
                    }`}
                ></DeleteForeverIcon>
              </div>
              <Box sx={{ height: 20 }}></Box>
              <Divider></Divider>
              <Box sx={{ height: 20 }}></Box>
            </div>
          );
        })}
      </div>
    </div>, document.getElementById('editorPortal')
  );
};

export default ExperienceEditor;
