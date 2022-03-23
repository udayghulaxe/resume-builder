import React, { useState, useEffect } from "react";
import { TextField, Button, Divider, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { updateResumeDataReducer } from "../../reducers/resumeDataSlice";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const SocialEditor = (props) => {
  const [editorData, setEditorData] = useState(props.editorData);
  const [firstime, setFirstTime] = useState(false);
  const [title, setTitle] = useState(editorData.title);
  const dispatch = useDispatch();
  const [socialItems, setSocialItems] = useState(editorData.items);

  const onSave = (event) => {
    console.log("socialItems", socialItems);
    setEditorData({
      ...editorData,
      title: title,
      items: socialItems.filter(
        (item, index) => item.socialPlatform.length > 0
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
    let newSocialItems = [...socialItems];
    newSocialItems[index] = {
      ...newSocialItems[index],
      [property]: newValue,
    };
    setSocialItems(newSocialItems);
  };

  const onAddSocial = (event, index) => {
    let newSocialItems = [...socialItems];
    newSocialItems.splice(index + 1, 0, {
        socialPlatform: "",
        username: ""
    });
    setSocialItems(newSocialItems);
  };

  const onDeleteExperience = (event, index) => {
    let newSocialItems = [...socialItems];
    newSocialItems.splice(index, 1);
    setSocialItems(newSocialItems);
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
            {socialItems.map((item, index) => {
              return (
                <div key={index}>
                  <div className="editor-item">
                    <div>
                      <TextField
                        label="Social Platform"
                        sx={{ mb: 1, mt: 1, mr: 1 }}
                        onChange={(event) =>
                          onFieldChange(event, index, "socialPlatform")
                        }
                        value={item.socialPlatform}
                        inputProps={{ style: { fontSize: 14 } }}
                        size="small"
                      />

                      <TextField
                        label="Username or URL"
                        sx={{ mb: 1, mt: 1, mr: 1 }}
                        onChange={(event) =>
                          onFieldChange(event, index, "username")
                        }
                        value={item.username}
                        inputProps={{ style: { fontSize: 14 } }}
                        size="small"
                      />

                    </div>
                    <AddCircleIcon
                      onClick={(event) => onAddSocial(event, index)}
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
        <Button onClick={onSave} disabled={!socialItems.filter(item => item.socialPlatform.length > 0).length}>Save</Button>
        {/*  */}
      </DialogActions>
    </Dialog>
  );
};

export default SocialEditor;
