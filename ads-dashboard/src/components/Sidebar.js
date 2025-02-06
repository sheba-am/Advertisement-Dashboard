import React from "react";
import { Drawer, List, ListItem, ListItemIcon, Box, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AdUnitsRoundedIcon from "@mui/icons-material/AdUnitsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { useState } from "react";


const menuItems = [
  { text: "خانه", icon: HomeRoundedIcon, key: "dashboard" },
  { text: "مدیریت تبلیغات", icon: AdUnitsRoundedIcon, key: "ads" },
  { text: "مدیریت کاربران", icon: PeopleRoundedIcon, key: "providers" },
  { text: "تنظیمات", icon: SettingsRoundedIcon, key: "settings" },
];

const Sidebar = ({drawerWidth}) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#333", // Dark background
          color: "#fff", // Light text
        },
      }}
      variant="permanent"
      anchor="right"
    >
      
      {/* Logo Section */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 2 }}>
        <img src="/mLogo.png" alt="Logo" style={{ width: 50, height: 50 }} />
      </Box>
      
      <List sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.key}
            onClick={() => setActiveItem(item.key)}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 1,
              borderRadius: 2,
              transition: "color 0.3s ease",
              color: activeItem === item.key ? "#007bff" : "#fff",
              "&:hover": { color: "#b3d7ff" },
            }}
          >
            <ListItemIcon sx={{ color: activeItem === item.key ? "#007bff" : "#fff", minWidth: "auto", mb: 0.5 }}>
              <item.icon fontSize="small" />
            </ListItemIcon>
            <Typography variant="caption" sx={{ fontSize: "0.65rem", textAlign: "center" }}>
              {item.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
