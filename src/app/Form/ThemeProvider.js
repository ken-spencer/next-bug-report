"use client"

import { ThemeProvider as Provider, createTheme } from "@mui/material/styles";
// import CssBaseline from '@mui/material/CssBaseline';

import useDarkMode from "./useDarkMode";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function ThemeProvider({
  theme = "dark", // light | dark | auto
  children,
}) {
  const useDark = useDarkMode();
  let chosenTheme = lightTheme;
console.log(theme);
  if (theme === "dark") {
    chosenTheme = darkTheme;
  } else if (theme === "auto") {
    chosenTheme = useDark ? darkTheme : lightTheme;
  }

  return <Provider theme={chosenTheme}>{children}</Provider>;
}
