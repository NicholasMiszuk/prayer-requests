import Head from "next/head";
import React, { useState } from "react";
import { Button, makeStyles, Box } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddPrayerModal from "../components/Modal/index";

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
    date: "2/25/2021",
  },
  {
    id: 1,
    creator: "Nick Miszuk",
    prayer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit.",
    comment: [],
    date: "2/18/2021",
  },
  {
    id: 2,
    creator: "Cruz Burgos",
    prayer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit.",
    comment: [],
    date: "2/22/2021",
  },
];

export default function Home() {
  const s = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [stateData, setStateData] = useState(fakeData);

  const itHasBeenSubmitted = (prayerFromModal, userFromModal) => {
    const lastId = stateData.length;
    const newItem = {
      id: lastId,
      prayer: prayerFromModal,
      creator: userFromModal,
      comment: [],
    };

    setStateData([newItem, ...stateData]);
  };

  const tableRow = stateData.map((request) => {
    return (
      <TableRow key={request.id}>
        <TableCell>{request.prayer}</TableCell>
        <TableCell>{request.creator}</TableCell>
        <TableCell>{request.date}</TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      <Head>
        <title>Prayer Request | Home</title>
      </Head>
      <AddPrayerModal
        itHasBeenSubmitted={itHasBeenSubmitted}
        open={open}
        onClose={handleClose}
      />
      <h1>Prayers</h1>
      <Box display="flex" justifyContent="center">
        <TableContainer style={{ width: "50%" }} component={Paper}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}><Button onClick={handleOpen} color="primary">
            Share New Request?
          </Button></div>
          <Table className={s.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Prayer</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Posted</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{tableRow}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}