import "./App.css";
import Sidebar from "components/sidebars/adminSidebar";
import Navbar from "components/navbar/adminNavbar";
import { Box } from "@mui/material";

import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import { routes } from "routes";

function App() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Sidebar />
        <Box
          sx={{
            marginTop: "100px",
            width: "100%",
            height: "80.6vh",
            overflowY: "auto",
            padding: "20px",
          }}
        >
          <Routes>
            {routes.map((item, index) => (
              <Route
                exact
                path={`${item.route}`}
                element={item.component}
                key={index}
              />
            ))}
            <Route path="/" element={<Navigate to="/users" />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
