import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import data from "../db.json";

const allColumns = [
  { id: "Overhead", label: "Overhead", minWidth: 100 },
  {
    id: "Jan",
    label: "January",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Feb",
    label: "February",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "March",
    label: "March",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "April",
    label: "April",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "May",
    label: "May",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "June",
    label: "June",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "July",
    label: "July",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "August",
    label: "August",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "September",
    label: "September",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "October",
    label: "October",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "November",
    label: "November",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "December",
    label: "December",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const rows = data.Sheet1;

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [colPage, setColPage] = React.useState(0);
  const [colsPerPage, setColsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangeColPage = (event, newColPage) => {
    setColPage(newColPage);
  };

  const handleChangeColsPerPage = (event) => {
    setColsPerPage(+event.target.value);
    setColPage(0);
  };

  const displayedColumns = allColumns.slice(
    colPage * colsPerPage,
    colPage * colsPerPage + colsPerPage + 1
  );

  return (
    <Box sx={{ width: "100%", padding: "3px" }}>
      <Typography variant="h6" component="div" sx={{ paddingBottom: 2 }}>
        CashFlow Summary 1
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden", boxShadow: 3 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {displayedColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#d2ddf3",
                      fontWeight: "bold",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.Overhead}
                    >
                      {displayedColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={12} sm={6}>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TablePagination
              rowsPerPageOptions={[7, 13]}
              component="div"
              count={allColumns.length}
              rowsPerPage={colsPerPage}
              page={colPage}
              onPageChange={handleChangeColPage}
              onRowsPerPageChange={handleChangeColsPerPage}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
