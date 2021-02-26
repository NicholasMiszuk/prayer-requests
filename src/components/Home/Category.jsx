import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import useStyles from "./styles";

const Category = () => {
  const s = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Catergory</TableCell>
            <TableCell>Topic</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow style={{ borderLeft: "12px solid #76923C" }}>
            <TableCell>
              <Link href="/" style={{ color: "black" }}>
                <Typography style={{ fontWeight: 800 }} variant="h6">
                  Prayer Requests
              </Typography>
              </Link>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit harum at pariatur possimus in aut suscipit commodi
                nesciunt voluptatibus explicabo!
              </Typography>
              <Box display="flex" alignItems="center">
                <div
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "red",
                    marginRight: 4,
                  }}
                />
                <Typography>tag</Typography>
              </Box>
            </TableCell>
            <TableCell width="19%">
              <Typography> 12 / week</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Category;
