import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
const Header = ({ appBarHeight, drawerWidth }) => {
    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: { width: "auto" },
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        order: 1,
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        flexGrow: 1,
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 1),
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: { width: "20ch" },
        },
    }));

    const getCurrentDate = () => {
        return new Date().toLocaleDateString("fa-IR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    };
    return (
        <AppBar
            position="fixed"
            sx={{ backgroundColor: "#fff", color: "#959CB6", right: 0, left: drawerWidth, height: appBarHeight, flexDirection: "row-reverse", pr: `${drawerWidth}px` }}
        >
            <Toolbar sx={{ display: "flex", width: "100%" }}>
                <IconButton sx={{ backgroundColor: "#E1F0FF", borderRadius: "12px", p: 1 }}>
                    <AccountCircleRoundedIcon sx={{ color: "#3699FF" }} />
                </IconButton>
                <IconButton sx={{ color: "#959CB6", borderRadius: "12px", p: 1, "&:hover": { backgroundColor: "#F0F0F0" } }}><NotificationsRoundedIcon /></IconButton>
                <IconButton sx={{ color: "#959CB6", borderRadius: "12px", p: 1, "&:hover": { backgroundColor: "#F0F0F0" } }}><SettingsRoundedIcon /></IconButton>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ backgroundColor: "rgba(124, 145, 253, 0.1)", px: 2, py: 0.5, borderRadius: 2 }}>
                        <Typography variant="body1" sx={{ color: "#959CBD" }}>{getCurrentDate()}</Typography>
                    </Box>


                </Box>
                <Search>
                    <StyledInputBase placeholder="جستجو..." inputProps={{ "aria-label": "search" }} />
                    <SearchIconWrapper><SearchRoundedIcon /></SearchIconWrapper>
                </Search>
            </Toolbar>
        </AppBar>
    )
}
export default Header;
