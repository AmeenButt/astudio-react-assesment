import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { secondaryColor } from "global";
import { useContext, useState } from "react";
import appContext from "state/context";
import Filters from "components/filter";
export default function Default({
  columns,
  rows,
  search,
  getData,
  columnFilter,
  setcolumns,
}) {
  const {
    selectedItems,
    setSelectedItems,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    dataCount,
  } = useContext(appContext);
  const handleItemSelection = (e, row) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, row]);
    } else {
      setSelectedItems((prevState) => {
        let newState = prevState.filter((item) => item.sr_no != row.sr_no);
        return newState;
      });
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Filters
        getData={getData}
        columns={columns}
        setcolumns={setcolumns}
        search={search}
        columnFilter={columnFilter}
      />
      {rows && rows.length > 0 ? (
        <>
          {" "}
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: "45vh" }}>
              <Table aria-label="sticky table">
                <TableHead
                  style={{
                    backgroundColor: "#D9D9D9",
                    borderRadius: "15px",
                  }}
                >
                  <TableRow>
                    <TableCell
                      align={"left"}
                      style={{
                        fontWeight: "bold",
                        borderRight: "1px solid rgba(0,0,0,0.2)",
                      }}
                    ></TableCell>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          fontWeight: "bold",
                          borderRight: "1px solid rgba(0,0,0,0.2)",
                          fontFamily: "Neutra Text Alt, sans-serif",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.sr_no}
                      >
                        <TableCell
                          align={"left"}
                          style={{
                            fontWeight: "bold",
                            borderRight: "1px solid rgba(0,0,0,0.2)",
                          }}
                          onChange={(e) => handleItemSelection(e, row)}
                        >
                          <input type="checkbox" />
                        </TableCell>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              sx={{
                                fontFamily: "Neutra Text Alt, sans-serif",
                              }}
                              key={column.id}
                            >
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
            <TablePagination
              rowsPerPageOptions={[5, 10, 20, 50]}
              component="div"
              count={dataCount}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage={"Rows Per Page"}
            />
          </Paper>
        </>
      ) : (
        <center>
          <Typography>No Results Found</Typography>
        </center>
      )}
    </>
  );
}
