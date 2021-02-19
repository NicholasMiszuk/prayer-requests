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
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

export default function Home() {
  const s = useStyles();
  const [openModal, setOpenModal] = useState(false);
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
      <Box display="flex" justifyContent="center">
        <TableContainer style={{ width: "50%" }} component={Paper}>
          <Table className={s.table} aria-label="simple table">
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