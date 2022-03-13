import React, {forwardRef, useImperativeHandle }  from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = React.useState(false);
    
    useImperativeHandle(ref, () => ({
        handleClickOpen()  {
            setOpen(true);
        }
    }));
    
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                {props.children}
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );
});


export default React.memo(Modal);