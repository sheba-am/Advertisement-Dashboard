import React from "react";
import { Box} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const drawerWidth = 80;
const appBarHeight = 64; // Adjust based on Toolbar height



const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Component */}
      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, ml: `${drawerWidth}px`, mt: `${appBarHeight}px` }}>
        {/* Header */}
        <Header drawerWidth={drawerWidth} appBarHeight={appBarHeight} />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
