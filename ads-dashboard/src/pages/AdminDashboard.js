import React from "react";
import { Box, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import bluePanel from "../img/bluePanel.jpg";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

ChartJS.register(ArcElement, Tooltip, Legend);

const drawerWidth = 80;
const appBarHeight = 64;
const dataValues = [50, 20, 25, 25];
const totalSum = dataValues.reduce((a, b) => a + b, 0);
const data = {
  labels: ["دسته 1", "دسته 2", "دسته 3", "دسته 4"],
  datasets: [
    {
      data: dataValues,
      backgroundColor: ["#F64E60", "#3699FF", "#0BB783", "#8950FC"],
      borderWidth: 0,

      cutout: "80%",  //emptiness of the middle
      radius: "80%", // size of the chart
    },
  ],
};

const AdminDashboard = () => {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, ml: `${drawerWidth}px`, mt: `${appBarHeight}px`, p: 3 }}>
        <Header drawerWidth={drawerWidth} appBarHeight={appBarHeight} />
        
        <Box sx={{ display: "flex", gap: 3, mt: 3, justifyContent: "space-between" }}>
          {/* Left Card with 4 Smaller Cards */}
          <Box sx={{ flex: 1, backgroundColor: "#fff", borderRadius: 2, p: 3, height: "55vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "50%",
              backgroundImage: `url(${bluePanel})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8
            }} />
            
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, position: "absolute", bottom: "5%", width: "90%" }}>
              {[{ icon: <BarChartRoundedIcon fontSize="large" />, text: "آمار تبلیغات" },
                { icon: <CampaignRoundedIcon fontSize="large" />, text: "مدیریت تبلیغات" },
                { icon: <ChatRoundedIcon fontSize="large" />, text: "پیام ها" },
                { icon: <SettingsRoundedIcon fontSize="large" />, text: "تنظیمات" }].map((item, index) => (
                <Box key={index} sx={{ backgroundColor: "#F0F0F0", borderRadius: 2, p: 2, textAlign: "center", height: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  {item.icon}
                  <Box fontSize="small" mt={1}>{item.text}</Box>
                </Box>
              ))}
            </Box>
          </Box>
          
          {/* Middle Card - Analytics */}
          <Box sx={{ flex: 1, backgroundColor: "#fff", borderRadius: 2, p: 3, height: "55vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6" fontWeight="bold" textAlign="right" width="100%">آمار هفتگی</Typography>
            <Typography variant="body2" textAlign="right" width="100%" color="gray">توضیحات کوتاه</Typography>
            <Box sx={{ width: "80%", height: "80%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <Doughnut data={data} options={{ plugins: { legend: { display: false } } }} />
              <Typography
                variant="h5"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {totalSum}
              </Typography>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, width: "100%", mt: 2 }}>
              {data.labels.map((label, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ width: 22, height: 22, backgroundColor: data.datasets[0].backgroundColor[index], borderRadius: 1 }}></Box>
                  <Typography variant="body2">{label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          
          {/* Right Card */}
          <Box sx={{ flex: 1, backgroundColor: "#fff", borderRadius: 2, p: 3, height: "55vh" }}>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
