import React, { useState, useEffect } from "react";
import { TextField, Button, Divider, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateResumeDataReducer } from "../../reducers/resumeDataSlice";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const ProfessionalSummaryEditor=(props)=>{
console.log(props.editorData);
    const [editorData, setEditorData] = useState(props.editorData);
  const [firstime, setFirstTime] = useState(false);
  const dispatch = useDispatch();
  const [professionalItems, setProfessionalItems] = useState(editorData.componentData);

  const onSave = (event) => {
    console.log("professionalItems", professionalItems);
    setEditorData({
        ...editorData,
      summaryBody: professionalItems.summaryBody
    });
    setFirstTime(true);
    
  };



  const onFieldChange = (event, index, property) => {
    const newValue = event.target.value;
    
    setProfessionalItems({...professionalItems, summaryBody:newValue});
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
          <div className="editor-item">
            <TextField
              fullWidth
              autoComplete="off"
              onChange={onFieldChange}
              value={professionalItems.summaryBody}
              variant="standard"
              multiline="true"
            />
          </div>


          </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={closeEditor}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
        {/*  */}
      </DialogActions>
    </Dialog>
    );

};

export default ProfessionalSummaryEditor;