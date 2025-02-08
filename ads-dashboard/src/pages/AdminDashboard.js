import React from "react";
import { Box, Table, Typography, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress, IconButton, Avatar } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import QuickAccess from "../components/QuickAccess";
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const drawerWidth = 80;
const appBarHeight = 64;

const adData = [
  { username: "user123", title: "عنوان تبلیغ 1", category: "دسته 1", progress: 70 },
  { username: "user456", title: "عنوان تبلیغ 2", category: "دسته 2", progress: 50 },
  { username: "user789", title: "عنوان تبلیغ 3", category: "دسته 3", progress: 85 },
  { username: "user101", title: "عنوان تبلیغ 4", category: "دسته 4", progress: 40 }
];

const getProgressColor = (value) => {
  if (value < 25) return "#F64E60";
  if (value < 50) return "#EF6327";
  if (value < 75) return "#8950FC";
  return "#0BB783";
};

const AdminDashboard = () => {
  return (
      <Box sx={{ display: "flex", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
        <Sidebar drawerWidth={drawerWidth} />          
        <Header drawerWidth={drawerWidth} appBarHeight={appBarHeight} />

        <Box className="admin-dash-content" component="main" sx={{ flexGrow: 1, mt: `${appBarHeight}px`, p: 3 }}>
      
          <Box sx={{ display: "flex", gap: 3, mt: 3, justifyContent: "space-between", width: "100%" }}>
            {/* Right Card - Line Chart */}
            <LineChart />
      
            {/* Middle Card - Analytics */}
            <DoughnutChart />
      
            {/* Left Card with 4 Smaller Cards */}
            <QuickAccess />
          </Box>

          <Box sx={{ mt: 3, backgroundColor: "#fff", borderRadius: 2, p: 3 }}>
          <Typography variant="h6" fontWeight="bold" textAlign="right" width="100%">تبلیغات فعال</Typography>            
            <TableContainer component={Paper} sx={{ direction: "rtl" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>کاربر</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>عنوان</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>دسته بندی</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>درصد تبلیغات</TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>عملیات</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {adData.map((ad, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "right", gap: 1 }}>
                          <Avatar sx={{ width: 30, height: 30 }} />
                          {ad.username}
                        </Box>
                      </TableCell>
                      <TableCell sx={{alignItems: "right"}}>{ad.title}</TableCell>
                      <TableCell>{ad.category}</TableCell>
                      <TableCell>
                        <LinearProgress variant="determinate" value={ad.progress} sx={{ bgcolor: "#E0E0E0", '& .MuiLinearProgress-bar': { backgroundColor: getProgressColor(ad.progress) } }} />
                      </TableCell>
                      <TableCell>
                        <IconButton sx={{ backgroundColor: "#F3F6F9", color: "#3699FF", borderRadius: 1, mx: 0.5 }}><EditIcon /></IconButton>
                        <IconButton sx={{ backgroundColor: "#F3F6F9", color: "#3699FF", borderRadius: 1, mx: 0.5 }}><DeleteIcon /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
  );
};

export default AdminDashboard;
