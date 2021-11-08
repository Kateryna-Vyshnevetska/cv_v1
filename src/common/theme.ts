import { createTheme } from '@mui/material/styles';

const mainFontFamaly = 'Robotto';
const secondFontFamaly = 'Poppins';


const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "UniversalSans";
          font-display: swap;
          font-weight: 700;
          src: url("/fonts/UniversalSans-700.woff"),
          url("/fonts/UniversalSans-700.ttf");
        },
        .swiper-container > * {
          outline: 1px solid transparent
        },
      `,
    },
  },
  typography: {
    h1: {
      fontFamily: mainFontFamaly,
      fontSize: 45,
      fontWeight: 900,
      lineHeight: '41px',
    },
    h2: {
      fontFamily: mainFontFamaly,
      fontSize: 45,
      fontWeight: 300,
      lineHeight: '41px',
    },
    h3: {
      fontFamily: secondFontFamaly,
      fontSize: 47,
      fontWeight: 700,
      lineHeight: '70px',
    },
    h4: {
      fontFamily: secondFontFamaly,
      fontSize: 30,
      fontWeight: 500,
      lineHeight: '45px',
    },
    body1: {
      fontFamily: mainFontFamaly,
      fontSize: 33,
      fontWeight: 400,
      lineHeight: '56px',
    },
    body2: {
      fontFamily: mainFontFamaly,
      fontSize: 25,
      fontWeight: 400,
      lineHeight: '41px',
    },
    subtitle1: {
      fontFamily: secondFontFamaly,
      fontSize: 33,
      fontWeight: 700,
      lineHeight: '49px',
    },
    subtitle2: {
      fontFamily: mainFontFamaly,
      fontSize: 28,
      fontWeight: 400,
      lineHeight: '1px',
    },

  }
});

export default theme;