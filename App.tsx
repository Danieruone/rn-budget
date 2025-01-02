// navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// screen
import HomeScreen from "./src/screens/HomeScreen";
import { useColorScheme } from "react-native";
import { CustomDarkTheme, LightTheme } from "./src/themes";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      theme={scheme === "dark" ? CustomDarkTheme : LightTheme}
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
}
