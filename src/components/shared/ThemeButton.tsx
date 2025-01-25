import React from "react";

import { CustomButton } from "./CustomButton";
import { useTheme } from "../../themes/context/ThemeContext";

export const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme();
  return <CustomButton title={theme} handlePress={toggleTheme} />;
};
