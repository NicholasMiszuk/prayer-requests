import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import useStyles from "./styles";

const Latest = () => {
  const s = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Latest</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default Latest;
