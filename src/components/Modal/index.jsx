import Head from "next/head";
import React, { useState } from "react";
import { makeStyles, Modal, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifycontent: "center",
    alignItems: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddPrayerModal = ({ open, onClose, itHasBeenSubmitted }) => {
  const classes = useStyles();
  const [prayer, setPrayer] = useState("");
  const [user, setUser] = useState("");


  const handleSubmit = () => {
    itHasBeenSubmitted(prayer, user);
  };
  return (
    <div>
      <Modal className={classes.modal} open={open} onClose={onClose}>
        <div
          style={{ display: "flex" }}
          className={classes.paper}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Prayer"
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
          />
          <TextField
            label="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddPrayerModal;
