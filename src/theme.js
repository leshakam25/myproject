const mainFont = "";
const logoFont = "";
const logoColor = "white";

export const theme = {
  palette: {
    primary: {
      main: "#DC3441",
    },
    darkbg: { main: "#2F2C43" },
    blockbg: { main: "#38344E" },
  },

  typography: {
    h6: {},
    h5: {},
    h4: {},
    h3: {},
    h2: {},
    h1: {},
    body2: { color: "#434057" },
    body1: {},
    subtitle: {},
    logoDesktop: {
      textDecoration: "none",
      fontSize: 32,
      color: logoColor,
      fontFamily: logoFont,
    },
    logoMobile: {
      textDecoration: "none",
      fontsize: 16,
      color: logoColor,
      fontFamily: logoFont,
    },
    // fontFamily: ["Arial"].join(","),
  },
};
