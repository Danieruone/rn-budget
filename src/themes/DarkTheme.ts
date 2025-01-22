import { DarkTheme } from "@react-navigation/native";

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#AE9BE9",
    background: "#1D2635",
    card: "#1B2230",
    text: "#FFFFFF",
  },
};
