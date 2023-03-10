import { Box, Button, Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import IconLinkButton from "../../components/Buttons/IconLinkButton";
import { EnhancedTableHead } from "../../components/TableHeader/TableHeader";
import TopBox from "../../components/TableHeader/TopBox";
import EditIcon from "@mui/icons-material/Edit";
const rows = [
  { id: 1, VIN: "1FM5K8D8XFGA24638", make: "BMW", year: "35+", model: "V4", price: "$20,000", createdOn: "1/1/2022 10:11 AM" },
  { id: 2, VIN: "1FM5K8D8XFGA24638", make: "BMW", year: "35+", model: "V4", price: "$20,000", createdOn: "1/1/2022 10:11 AM" },
];
const VehicleList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 3,
      }}>
      <TopBox
        headerText={"Vehicles"}
        button_one={"+ Add Vehicle"}
        button_two={"Negotiating vehicles"}
        button_three={"Purchased vehicles"}
        searchText={"Search vehicle"}
        sortingText={"Customer"}
        value={""}
        onClick={onclick}
      />

      <Table
        sx={{
          width: { lg: "100%", xs: "1000px" },
        }}
        aria-labelledby="tableTitle">
        <EnhancedTableHead
          totalColumn={["VIN", "Make", "Year", "Model", "Price", "Created On", "Action"]}
          // numSelected={selected.length}
          // order={order}
          // orderBy={orderBy}
          // onSelectAllClick={handleSelectAllClick}
          // onRequestSort={handleRequestSort}
          // rowCount={rows.length}
        />
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="left">{row.VIN}</TableCell>
              <TableCell align="left">{row.make}</TableCell>
              <TableCell align="left">{row.year}</TableCell>
              <TableCell align="left">{row.model}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.createdOn}</TableCell>

              <TableCell align="left" sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconLinkButton buttonName={"Edit"} />
                <IconLinkButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default VehicleList;
