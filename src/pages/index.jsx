import Head from "next/head";
import React, { useState } from "react";
import {
  Button,
  makeStyles,
  Box,
  Modal,
  Fade,
  Backdrop,
  TextField,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  table: {
    minWidth: 650,
  },
  modal: {
    marginLeft: "30%",
    display: "flex",
    alignItems: "center",
    justifycontent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const fakeData = [
  {
    id: 0,
    creator: "Cruz Burgos",
    prayer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit.",
    comment: [],
  },
  {
    id: 1,
    creator: "Nick Miszuk",
    prayer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit.",
    comment: [],
  },
  {
    id: 2,
    creator: "Cruz Burgos",
    prayer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit.",
    comment: [],
  },
];

function MyModal() {
  const classes = useStyles();
  const [modalStyle] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ display: "flex" }} className={classes.root} noValidate>
        <TextField id="stanadrd-basic" label="Prayer" />
        <TextField id="standard-basic" label="User" />
        <Button color="primary">Submit</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    </div>
  );
}

export default function Home() {
  const s = useStyles();
  const [stateData, setStateData] = useState(fakeData);

  const tableRow = stateData.map((request) => {
    return (
      <TableRow>
        <TableCell>{request.prayer}</TableCell>
        <TableCell>{request.creator}</TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      <Head>
        <title>Prayer Request | Home</title>
      </Head>
      <h1>Prayers</h1>
      <MyModal />
      <Box display="flex" justifyContent="center">
        <TableContainer style={{ width: "50%" }} component={Paper}>
          <Table className={s.table} aria-label="simple table">
            <Button>Make Request</Button>

            <TableHead>
              <TableRow>
                <TableCell>Prayer</TableCell>
                <TableCell>User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{tableRow}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
