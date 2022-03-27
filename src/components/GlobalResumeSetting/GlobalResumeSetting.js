import React from "react";
import { TextField, Button, Divider, Box } from "@mui/material";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { useDispatch } from "react-redux";
// import { updateResumeDataReducer } from "../../reducers/resumeDataSlice";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const GlobalResumeSetting = (props) => {

  const closeEditor = () => {
    props.setOpen(false);
  };


  return (
    <Dialog
      maxWidth="sm"
      fullWidth={true}
      open={props.open}
      onClose={closeEditor}
    >
      <DialogContent>
        <div>
          <h1>Global Resume Setting</h1>
        </div>
      </DialogContent>

      <DialogActions>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default  React.memo(GlobalResumeSetting);
