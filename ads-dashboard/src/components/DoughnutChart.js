import React from 'react';
import { Box, Typography } from "@mui/material";
import { Doughnut} from "react-chartjs-2";
const DoughnutChart = () => {
    const dataValues = [30, 20, 25, 25];
    const totalSum = dataValues.reduce((a, b) => a + b, 0);
    const data = {
      labels: ["دسته 1", "دسته 2", "دسته 3", "دسته 4"],
      datasets: [
        {
          data: dataValues,
          backgroundColor: ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"],
          borderWidth: 1,
          cutout: "70%",
        },
      ],
    };    
    return ( 
        <Box sx={{ flex: 1, backgroundColor: "#fff", borderRadius: 2, p: 3, height: "55vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="h6" fontWeight="bold" textAlign="right" width="100%">آمار هفتگی</Typography>
              <Typography variant="body2" textAlign="right" width="100%" color="gray">توضیحات کوتاه</Typography>
              <Box sx={{ width: "80%", height: "80%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                <Doughnut data={data} options={{ plugins: { legend: { display: false } } }} />
                <Typography
                  variant="h6"
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
     );
}
 
export default DoughnutChart;