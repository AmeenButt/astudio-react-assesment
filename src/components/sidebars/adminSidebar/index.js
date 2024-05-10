import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import appContext from "state/context";
import { closeSidebar } from "style";
import { openSidebar } from "style";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "assets/dashboard.png";
import { sideBarMain, sideBarPrimaryItem } from "./style";
export default function Default() {
  const state = useContext(appContext);
  const { showSidebar } = state;
  const navigator = useNavigate();
  const entries = [
    {
      id: 1,
      title: "Users",
      icon: dashboardIcon,
      route: "/users",
    },
    {
      id: 2,
      title: "Products",
      icon: dashboardIcon,
      route: "/products",
    },
  ];
  const toggleMenu = (entry) => {
    navigator(entry.route);
  };

  return (
    <Box
      sx={{
        ...sideBarMain,
        animation: showSidebar
          ? `${openSidebar} 1s forwards`
          : `${closeSidebar} 1s forwards`,
      }}
    >
      {entries.map((entry) => (
        <Box key={entry.id}>
          <Box sx={sideBarPrimaryItem} onClick={() => toggleMenu(entry)}>
            <Typography
              sx={{
                margin: "0px 10px",
                color: "#322625",
                fontFamily: "Neutra Text Alt, sans-serif",
              }}
            >
              {entry.title}
            </Typography>
            <img
              src={entry.icon}
              style={{
                height: "30px",
                width: "30px",
              }}
              alt="icon"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
