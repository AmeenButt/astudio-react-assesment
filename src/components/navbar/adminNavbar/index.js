import React from "react";
import { Box } from "@mui/material";
import logo from "assets/ASTUDIO-logo-long.svg";
// import MenuIcon from '@mui/icons-material/Menu';
import appContext from "state/context";
import { useContext } from "react";
import menuIcon from "assets/menuBars.png";
import fullScreen from "assets/full-screen-svgrepo-com 1.png";
import { primaryColor, secondaryColor } from "global";
import "App.css";
export default function Default() {
  const state = useContext(appContext);
  const { showSidebar, setshowSidebar } = state;
  const goFullscreen = () => {
    if (!document.fullscreenElement) {
      // Request fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        /* Firefox */
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        /* IE/Edge */
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  };
  return (
    <Box
      className="element"
      sx={{
        height: "100px",
        width: "100vw",
        // boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
        zIndex: "111111",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "white",
        borderBottom: `1px solid ${primaryColor}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          style={{
            height: "80px",
            width: "180px",
            marginLeft: "10px",
          }}
          alt="logo"
        />
        <img
          src={menuIcon}
          alt="menuIcon"
          style={{
            height: "40px",
            width: "40px",
            marginLeft: "20px",
            backgroundColor: `${secondaryColor}`,
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => setshowSidebar(!showSidebar)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
        }}
      >
        <img
          src={fullScreen}
          alt="menuIcon"
          style={{
            height: "30px",
            width: "30px",
            marginRight: "20px",
            padding: "5px",
            marginLeft: "20px",
            backgroundColor: `${secondaryColor}`,
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={goFullscreen}
        />
      </Box>
    </Box>
  );
}
