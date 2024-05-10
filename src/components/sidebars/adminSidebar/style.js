import { primaryColor } from "global";

export const sideBarMain = {
  backgroundColor: "white",
  paddingTop: "5px",
  height: "85.5vh",
  overflow: "auto",
  zIndex: 11,
  top: "100px",
  left: 0,
  boxSizing: "border-box",
  position: {
    xs: "absolute",
    sm: "absolute",
    md: "relative",
    lg: "relative",
  },
  "&::-webkit-scrollbar": {
    width: "5px",
    display: "block",
  },
  "&::-webkit-scrollbar": {
    width: "5px",
    height: "0px",
    // display: 'none'
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: "10px",
    backgroundColor: "white",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: primaryColor,
    borderRadius: "10px",
  },
};
export const sideBarPrimaryItem = {
  display: "flex",
  justifyContent: "space-between",
  border: "2px solid transparent",
  borderBottom: `1px solid ${primaryColor}`,
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#0B0B3032",
    borderRadius: "10px",
    color: "#0B0B45",
  },
  cursor: "pointer",
  padding: "13px 10px 13px 0px",
  margin: "0px 5px",
};
