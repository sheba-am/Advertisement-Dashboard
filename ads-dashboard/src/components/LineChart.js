import React from 'react'
import { Box, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
const LineChart = () => {
    const lineData = {
        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"],
        datasets: [
            {
                label: "بازدیدها",
                data: [12, 19, 10, 25, 18, 30, 22],
                fill: false,
                borderColor: "#3699FF",
                tension: 0.4,
            },
        ],
    };
    return (
        <Box sx={{ flex: 1, backgroundColor: "#fff", borderRadius: 2, p: 3, height: "55vh" }}>
            <Typography variant="h6" fontWeight="bold" textAlign="right" width="100%">آمار بازدید تبلیغات</Typography>
            <Box sx={{ width: "100%", height: "80%", mt: 2 }}>
                <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom" } } }} />
            </Box>
        </Box>
    );
}

export default LineChart;