import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { DarkTheme, LightTheme } from './Token/Token';

interface StyleWrapperProps extends PropsWithChildren<unknown> {
  theme?: 'dark' | 'light';
}

const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,400;1,700&display=swap';

const ThemeProvider = React.createContext(DarkTheme);

export function StyleWrapper(props: StyleWrapperProps) {
  const { theme = 'dark' } = props;

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = FONT_URL;
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }, []);

  const appliedTheme = theme === 'dark' ? DarkTheme : LightTheme;

  return (
    <ThemeProvider.Provider value={appliedTheme}>
      {props.children}
    </ThemeProvider.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeProvider);
}
