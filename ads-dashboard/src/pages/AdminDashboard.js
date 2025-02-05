import React from "react";
import { Box, CssBaseline, Toolbar, AppBar, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";

const drawerWidth = 240;

const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: 0 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mr: `${drawerWidth}px` }}>
        <Toolbar />
        <Typography>
          Main content goes here.
        </Typography>
      </Box>
      <Sidebar drawerWidth={drawerWidth} />
    </Box>
  );
};

export default AdminDashboard;
