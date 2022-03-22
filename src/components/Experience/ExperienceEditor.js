import React, { useState, useEffect } from "react";
import { TextField, Button, Divider, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { updateResumeDataReducer } from "../../reducers/resumeDataSlice";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const ExperienceEditor = (props) => {
  const [editorData, setEditorData] = useState(props.editorData);
  const [firstime, setFirstTime] = useState(false);
  const [title, setTitle] = useState(editorData.title);
  const dispatch = useDispatch();
  const [experienceItems, setExperienceItems] = useState(editorData.items);

  const onSave = (event) => {
    console.log("experienceItems", experienceItems);
    setEditorData({
      ...editorData,
      title: title,
      items: experienceItems.filter(
        (item, index) => item.experienceTitle.length > 0
      ),
    });
    setFirstTime(true);
    console.log(editorData);
  };

  const onTitleChange = (event) => {
    const newVal = event.target.value;
    setTitle(newVal);
  };

  const onFieldChange = (event, index, property) => {
    const newValue = event.target.value;
    let newExperienceItems = [...experienceItems];
    newExperienceItems[index] = {
      ...newExperienceItems[index],
      [property]: newValue,
    };
    setExperienceItems(newExperienceItems);
  };

  const onAddExperience = (event, index) => {
    let newExperienceItems = [...experienceItems];
    newExperienceItems.splice(index + 1, 0, {
      experienceTitle: "",
      company: "",
      date: "",
      location: "",
      experienceSummary: "",
    });
    setExperienceItems(newExperienceItems);
  };

  const onDeleteExperience = (event, index) => {
    let newExperienceItems = [...experienceItems];
    newExperienceItems.splice(index, 1);
    setExperienceItems(newExperienceItems);
  };

  const closeEditor = () => {
    props.setOpen(false);
  };

  useEffect(() => {
    if (firstime) {
      console.log("props", props);
      dispatch(
        updateResumeDataReducer({
          name: props.componentName,
          column: props.componentColumn,
          data: editorData,
        })
      );
      setFirstTime(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorData]);

  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      open={props.open}
      onClose={closeEditor}
    >
      <DialogContent>
        <div className="editor-wrap">
          <div className="editor-heading-wrap">
            <TextField
              fullWidth
              autoComplete="off"
              onChange={onTitleChange}
              value={title}
              variant="standard"
            />
          </div>

          <div className="editor-items-wrap">
            {experienceItems.map((item, index) => {
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
                        label="Date"
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

                      <TextField
                        label="Summary"
                        sx={{ mb: 1, mt: 1, mr: 1 }}
                        onChange={(event) =>
                          onFieldChange(event, index, "experienceSummary")
                        }
                        value={item.experienceSummary}
                        inputProps={{ style: { fontSize: 14 } }}
                        rows={3}
                        style = {{width: 380}}
                        multiline
                        
                      />
                    </div>
                    <AddCircleIcon
                      onClick={(event) => onAddExperience(event, index)}
                      className="add-item-icon"
                    ></AddCircleIcon>
                    <DeleteForeverIcon
                      onClick={(event) => onDeleteExperience(event, index)}
                      className={`delete-item-icon ${
                        index === 0 ? "d-none" : ""
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
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={closeEditor}>Cancel</Button>
        <Button onClick={onSave} disabled={!experienceItems.filter(item => item.experienceTitle.length > 0).length}>Save</Button>
        {/*  */}
      </DialogActions>
    </Dialog>
  );
};

export default ExperienceEditor;
