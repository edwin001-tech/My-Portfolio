import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import FelipaRegular from "../fonts/FelipaRegular.ttf";

const breakpoints = createBreakpoints({});

export const themeYellow = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "'FelipaRegular', sans-serif",
        fontSize: "4rem",
        [breakpoints.only("xs")]: {
          fontSize: "3rem"
        }
      },

      h2: {
        fontFamily: "'FelipaRegular', sans-serif"
      },

      h4: {
        fontFamily: "'FelipaRegular', sans-serif"
      }
    }
  },
  palette: {
    primary: { main: "#ffc107" },
    secondary: { main: "#f57c00" },
    text: {
      primary: "#212121",
      secondary: "black"
    }
  }
});

export const themeMing = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "'FelipaRegular', sans-serif",
        fontSize: "4rem",
        [breakpoints.only("xs")]: {
          fontSize: "3rem"
        }
      },
      h2: {
        fontFamily: "'FelipaRegular', sans-serif"
      },

      h4: {
        fontFamily: "'FelipaRegular', sans-serif"
      }
    }
  },
  palette: {
    primary: { main: "#3E6680" },
    secondary: { main: "#5AB1BB" },
    text: {
      primary: "#1E152A",
      secondary: "black"
    }
  }
});

export const themePink = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "'FelipaRegular', sans-serif",
        fontSize: "4rem",
        [breakpoints.only("xs")]: {
          fontSize: "3rem"
        }
      },
      h2: {
        fontFamily: "'FelipaRegular', sans-serif"
      },

      h4: {
        fontFamily: "'FelipaRegular', sans-serif"
      }
    }
  },
  palette: {
    primary: { main: "#FF1654" },
    secondary: { main: "#ffd058" },
    text: {
      primary: "#247BA0",
      secondary: "black"
    }
  }
});

export const themeBlue = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "'FelipaRegular', sans-serif",
        fontSize: "4rem",
        [breakpoints.only("xs")]: {
          fontSize: "3rem"
        }
      },
      h2: {
        fontFamily: "'FelipaRegular', sans-serif"
      },

      h4: {
        fontFamily: "'FelipaRegular', sans-serif"
      }
    }
  },
  palette: {
    primary: { main: "#fff" },
    secondary: { main: "#596869" },
    text: {
      primary: "#36453B"
    }
  }
});

export const themeBlack = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "4rem",
        [breakpoints.only("xs")]: {
          fontSize: "3rem"
        }
      }
    }
  },
  palette: {
    primary: { main: "#1a1a1d" },
    secondary: { main: "#A69888" },
    text: {
      primary: "#c3073f",
      secondary: "white"
    },
    background: {
      default: "#1a1a1d"
    }
  }
});
