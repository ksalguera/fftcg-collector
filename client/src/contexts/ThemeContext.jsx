import { createContext, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const themeSettings = mode => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
          primary: { main: grey[900] },
          secondary: { 
            dark: '#9e9d24',
            main: '#eeff41' 
          },
          neutral: {
            dark: grey[700],
            main: grey[500],
            light: grey[100]
          },
          background: { 
            default: '#fcfcfc',
            paper: grey[100]
           }
        } : {
          primary: { main: grey[100] },
          secondary: { main: '#eeff41' },
          neutral: {
            dark: grey[900],
            main: grey[500],
            light: grey[100]
          },
          background: { 
            default: grey[900], 
            paper: grey[800] 
          }
        }
      )
    },
    // typography settings
    typography: {
      h1: { fontSize: 32 },
      h2: { fontSize: 26 },
      h3: { fontSize: 22 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 }
    }
  }
}

// creates colorMode context            

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

//  sets, updates, and exports light/dark mode state

export const useMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme(themeSettings(prefersDarkMode ? 'dark' : 'light')),
    [prefersDarkMode],
  );

  return [theme];
}