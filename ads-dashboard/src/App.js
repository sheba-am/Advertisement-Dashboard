import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import AdminDashboard from './pages/AdminDashboard';
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div>
      <AdminDashboard />
    </div>
    </ThemeProvider>
  );
}

export default App;
