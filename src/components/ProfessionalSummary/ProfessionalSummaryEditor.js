import React, { useState, useEffect } from "react";
import { TextField, Button, Divider, Box } from "@mui/material";
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
  const [professionalSummaryItems, setprofessionalSummaryItems] = useState(editorData.items);

  const onSave = (event) => {
    console.log("professionalSummaryItems", professionalSummaryItems);
    setEditorData({
      ...editorData,
      title: title,
      items: professionalSummaryItems.filter(
        (item, index) => item.summary.length > 0
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
    let newprofessionalSummaryItems = [...professionalSummaryItems];
    newprofessionalSummaryItems[index] = {
      ...newprofessionalSummaryItems[index],
      [property]: newValue,
    };
    setprofessionalSummaryItems(newprofessionalSummaryItems);
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
              multiline="true"
            />
          </div>

          <div className="editor-items-wrap">
            {professionalSummaryItems.map((item, index) => {
              return (
                <div key={index}>
                  <div className="editor-item">
                    <div>
                      <TextField
                        label="Summary"
                        sx={{ mb: 1, mt: 1, mr: 1 }}
                        onChange={(event) =>
                          onFieldChange(event, index, "summary")
                        }
                        fullWidth
                        value={item.summary}
                        inputProps={{ style: { fontSize: 14 } }}
                        style = {{width: 380}}
                        size="small"
                        rows={5}
                        multiline
                      />

                    </div>
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
        <Button onClick={onSave} disabled={!professionalSummaryItems.filter(item => item.summary.length > 0).length}>Save</Button>
        {/*  */}
      </DialogActions>
    </Dialog>
  );
};

export default SocialEditor;
