import React from 'react'
import { Box } from "@mui/material";
import bluePanel from "../img/bluePanel.jpg";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
const QuickAccess = () => {
    return (
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
    );
}

export default QuickAccess;