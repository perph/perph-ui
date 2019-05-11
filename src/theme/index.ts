import * as styledComponents from 'styled-components';
import React from 'react';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
  backgroundColor: string;
  width: number;
}
const theme_light = {};
const theme_dark = {};
export const theme = {
  primaryColor: '#e9e9eb',
};

const ThemeContext = React.createContext(theme_light);

export default styled;
export { css, keyframes, ThemeProvider, ThemeContext, theme_light, theme_dark };
