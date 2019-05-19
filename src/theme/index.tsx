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
  backgroundColor: string;
  width: number;
}
export type ThemeMode = 'light' | 'dark';
type ITheme = {
  background: string;
};
interface IThemeProvider {
  mode: ThemeMode;
  theme: any;
  updateTheme: Function;
}
let theme_light_styles: ITheme = {
  background: 'white',
};
let theme_dark_styles: ITheme = {
  background: 'black',
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
