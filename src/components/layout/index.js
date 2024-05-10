import React, { useContext } from "react";
import { Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavigateBefore } from "@mui/icons-material";
import appContext from "state/context";

export default function Default(props) {
  const state = useContext(appContext);
  const { language } = state;
  const breadcrumbs = [
    <Link
      style={{
        textDecoration: "none",
        color: "black",
        fontFamily: "Neutra Text Alt, sans-serif",
      }}
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={() => {}}
    >
      {props.parent}
    </Link>,
    <Typography
      sx={{
        fontFamily: "Neutra Text Alt, sans-serif",
      }}
      key="3"
      color="text.primary"
    >
      {props.child}
    </Typography>,
  ];
  return (
    <div>
      <Box
        sx={{
          width: "98%",
          backgroundColor: "white",
          borderRadius: "25px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          padding: "20px 10px",
          marginBottom: "30px",
        }}
      >
        <Breadcrumbs
          sx={
            {
              // marginBottom: '20px'
            }
          }
          separator={
            language == "ar" || language == "ur" || language == "hin" ? (
              <NavigateBefore fontSize="small" />
            ) : (
              <NavigateNextIcon fontSize="small" />
            )
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          width: "98%",
          backgroundColor: "white",
          borderRadius: "25px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          padding: "20px 10px",

          // marginBottom:'30px'
        }}
      >
        {props.children}
      </Box>
    </div>
  );
}
