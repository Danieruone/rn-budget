import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider, useTheme } from "./src/themes/context/ThemeContext";
import HomeScreen from "./src/screens/HomeScreen";
import { CustomDarkTheme, LightTheme } from "./src/themes";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer
      theme={theme === "dark" ? CustomDarkTheme : LightTheme}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Your current budget" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
