import React, { useState } from "react";
import AppContext from "./context";
export default function State(props) {
  const [showSidebar, setshowSidebar] = useState(
    window.screen.width <= 480 ? false : true
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dataCount, setdataCount] = useState(0);

  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setshowSidebar,
        selectedItems,
        setSelectedItems,

        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        dataCount,
        setdataCount,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
