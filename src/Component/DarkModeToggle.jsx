import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const DarkModeToggle = () => {
  const [mode, setMode] = useState('light'); // Default to light mode

  // Check for stored theme preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Create a theme based on the current mode
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode); // Save preference in localStorage
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </div>
    </ThemeProvider>
  );
};

export default DarkModeToggle;
