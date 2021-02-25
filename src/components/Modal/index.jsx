import Head from "next/head";
import React, { useState } from "react";
import { makeStyles, Modal, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    position: "absolute",
    justifycontent: "center",
    alignItems: "center",
  },
  paper: {
    width: "600px",
    height: "200px",
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
    <div style={{ width: "100px" }}>
      <Modal className={classes.modal} open={open} onClose={onClose}>
        <div
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          className={classes.paper}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ width: "400px", marginTop: "20px" }}
            label="Prayer"
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
          />
          <TextField
            style={{ width: "400px" }}
            label="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Button style={{ margin: "5%", width: "20px" }} onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddPrayerModal;
