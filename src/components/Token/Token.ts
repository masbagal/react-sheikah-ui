export type ColorEnum = 
  | 'uiLightPrimary' 
  | 'uiLightSecondary' 
  | 'uiDarkPrimary' 
  | 'uiDarkSecondary' 
  | 'uiCyan' 
  | 'uiBlue' 
  | 'uiYellow' 
  | 'uiRed' 
  | 'uiGreen' 
  | 'uiTrueBlack'
  | 'uiTrueWhite'

export type FontSizeEnum = 
| 'tiny' 
| 'small' 
| 'base' 
| 'large' 
| 'title-small' 
| 'title-medium' 
| 'title-large' 

const lightColorsPrimary = {
  uiDarkPrimary: "#FCFCFC",
  uiDarkSecondary: "#A9A86A",
  uiLightPrimary: "#1D262F",
  uiLightSecondary: "#8C867C"
} 

const darkColorsPrimary = {
  uiLightPrimary: "#FCFEE7",
  uiLightSecondary: "#FFFEF3",
  uiDarkPrimary: "#1D262F",
  uiDarkSecondary: "#8C867C"
}

const otherColors = {
  uiCyan: "#1DF6CB",
  uiBlue: "#21CCFA",
  uiYellow: "#F6C906",
  uiRed: "#D42E47",
  uiGreen: "#B7E507",
  uiTrueWhite: "#FCFEE7",
  uiTrueBlack: "#1D262F",
} 

const lightColors: Record<ColorEnum, string> = Object.assign({}, lightColorsPrimary, otherColors);
const darkColors: Record<ColorEnum, string> = Object.assign({}, darkColorsPrimary, otherColors);

export const fontSize: Record<FontSizeEnum, string> = {
  tiny : '0.75rem',
  small : '0.875rem',
  base : '1rem',
  large : '1.125rem',
  'title-small' : '1.25rem',
  'title-medium' : '1.5rem',
  'title-large' : '1.875rem'
}

export const LightTheme = {
  currentTheme: 'light',
  color: lightColors,
  fontSize
};

export const DarkTheme = {
  currentTheme: 'dark',
  color: darkColors,
  fontSize
};
