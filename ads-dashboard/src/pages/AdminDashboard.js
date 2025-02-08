import React from "react";
import { Box,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress, IconButton } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";
import QuickAccess from "../components/QuickAccess";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const drawerWidth = 80;
const appBarHeight = 64;




const AdminDashboard = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
        <Sidebar drawerWidth={drawerWidth} />
        <Box component="main" sx={{ flexGrow: 1, ml: `${drawerWidth}px`, mt: `${appBarHeight}px`, p: 3 }}>
          <Header drawerWidth={drawerWidth} appBarHeight={appBarHeight} />
      
          <Box sx={{ display: "flex", gap: 3, mt: 3, justifyContent: "space-between" }}>
            {/* Right Card - Line Chart */}
            <LineChart />
      
      
            {/* Middle Card - Doughnut */}
            <DoughnutChart />
      
            {/* Left Card with 4 Smaller Cards */}
            <QuickAccess />
            
          </Box>
        </Box>
      
      </Box>     
    </Box>
    
  );
};

export default AdminDashboard;
