import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';
import CuisinePage from './pages/CuisinePage';
import BookingPage from './pages/BookingPage';

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1B5E20', // Dark green representing coconut trees
    },
    secondary: {
      main: '#795548', // Brown representing coconut shells
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route path="/cuisine" element={<CuisinePage />} />
                <Route path="/booking" element={<BookingPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App; 