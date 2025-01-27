import React from "react";

import { Pressable, View } from "react-native";

// theme
import { useTheme } from "../../themes/context/ThemeContext";

// icons
import IconLight from "react-native-vector-icons/Entypo";
import IconDark from "react-native-vector-icons/MaterialIcons";

export const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Pressable onPress={toggleTheme}>
      <View>
        {theme === "light" ? (
          <IconLight name="light-up" size={25} color={"black"} />
        ) : (
          <IconDark name="dark-mode" size={25} color={"white"} />
        )}
      </View>
    </Pressable>
  );
};
