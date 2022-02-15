import React from 'react';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { useDarkMode } from './customHooks/useDarkMode';
import ToggleThemeBtn from './components/ToggleThemeBtn/ToggleThemeBtn';
import './assets/styles/App.css';

function App():JSX.Element {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <AppRouter />
      <>
        <GlobalStyles />
        <ToggleThemeBtn theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
