import * as styledComponents from 'styled-components';
import React, { useState } from 'react';

const {
  default: styled,
  css,
  keyframes,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
  background: string;
  width: number;
  navbarBackground: string;
  navbarSelector: string;
  navbarSelectedRow: string;
  navbarSelectedIndicator: string;
  color: string;
  colorNavbarSelected: string;
  colorNavbarUnselected: string;
}
export type ThemeMode = 'light' | 'dark';
export type ITheme = {
  background: string;
  navbarBackground: string;
  navbarSelectedRow: string;
  navbarSelectedIndicator: string;
  colorNavbarSelected: string;
  colorNavbarUnselected: string;
  primaryColor: string;
  color: string;
};
interface IThemeProvider {
  mode: ThemeMode;
  theme: any;
  updateTheme: Function;
}
let theme_light_styles: ITheme = {
  background: 'white',
  navbarBackground: '#3325d8',
  navbarSelectedRow: 'white',
  colorNavbarSelected: 'black',
  colorNavbarUnselected: 'white',
  navbarSelectedIndicator: 'white',
  primaryColor: 'black',
  color: 'black',
};
let theme_dark_styles: ITheme = {
  background: '#0f1113',
  navbarBackground: 'white',
  navbarSelectedRow: '#0f1113',
  colorNavbarSelected: 'white',
  colorNavbarUnselected: 'black',
  navbarSelectedIndicator: '#0f1113',

  primaryColor: 'white',
  color: 'white',
};

let initial_context: IThemeProvider = {
  mode: 'light',
  theme: theme_light_styles,
  updateTheme: () => {},
};
export const theme = {
  primaryColor: '#e9e9eb',
};

const ThemeContext = React.createContext<IThemeProvider>(initial_context);

const ThemeProvider: React.FC = props => {
  const [theme, setTheme] = useState(theme_light_styles);
  const [mode, setMode] = useState<ThemeMode>('light');
  const updateTheme = (mode: ThemeMode) => {
    console.log('updating theme:', mode);
    if (mode === 'light') {
      setTheme(theme_light_styles);
      setMode('light');
    } else {
      setTheme(theme_dark_styles);
      setMode('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, updateTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default styled;
export {
  css,
  keyframes,
  ThemeProvider,
  ThemeContext,
  theme_light_styles,
  theme_dark_styles,
};
