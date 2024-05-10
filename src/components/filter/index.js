import { Box, IconButton, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { secondaryColor } from "global";
const textField = {
  borderRadius: "10px",
  borderColor: secondaryColor,
  height: "60px",
  padding: 0,

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: secondaryColor, // Set the outline color on hover
    height: "60px",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: secondaryColor, // Set the outline color on focus
    height: "60px",
  },
};
export default function Default({
  search,
  getData,
  columnFilter,
  setcolumns,
  columns,
}) {
  const [showSearchField, setShowSearchField] = useState(false);
  const onFilterUpdae = (e, item) => {
    if (!e.target.checked) {
      setcolumns((prevState) => {
        let newState = [...prevState];
        let updatedUpdated = newState.filter((itemm) => itemm.id != item);
        return updatedUpdated;
      });
    } else {
      setcolumns((prevState) => {
        let newState = [...prevState];
        newState.splice(columnFilter.indexOf(item), 0, {
          id: item,
          label: item.charAt(0).toUpperCase() + item.slice(1),
          minWidth: 170,
        });
        return newState;
      });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingBottom: "15px",
      }}
    >
      {!showSearchField && (
        <IconButton>
          <SearchIcon
            sx={{
              cursor: "pointer",
            }}
            onClick={() => setShowSearchField(true)}
          />
        </IconButton>
      )}
      {
        <TextField
          onBlur={() => setShowSearchField(false)}
          onChange={(e) => {
            if (e.target.value == "") {
              getData();
            } else {
              search(e.target.value);
            }
          }}
          InputProps={
            showSearchField && {
              endAdornment: (
                <SearchIcon
                  sx={{
                    marginRight: "15px",
                  }}
                />
              ),
            }
          }
          placeholder="Search Here..."
          sx={{
            ...textField,
            width: showSearchField ? "200px" : "0px", // Adjust width based on showSearchField state
            padding: showSearchField && "0",
            transition: showSearchField ? "width 0.5s" : "width 0.5s",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              borderColor: secondaryColor,
              height: "60px",
              padding: showSearchField && "0",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: secondaryColor, // Set the outline color
              height: "60px",
              padding: showSearchField && "0",
            },
          }}
        />
      }
      <Select
        sx={{
          marginLeft: showSearchField && "20px",
          fontFamily: "Neutra Text Alt, sans-serif",
        }}
        value={"select"}
      >
        <MenuItem value="select">---Select Fields---</MenuItem>
        {columnFilter &&
          columnFilter.map((item) => (
            <MenuItem value={item}>
              <input
                onChange={(e) => onFilterUpdae(e, item)}
                value={item}
                checked={columns.some((column) => column.id === item)}
                type="checkbox"
              />
              {item}
            </MenuItem>
          ))}
      </Select>
    </Box>
  );
}
