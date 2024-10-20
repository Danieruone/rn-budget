import React from "react";
import { View } from "react-native";

// components
import { CurrentBudgetHero } from "../components/CurrentBudgetHero";
import { MovementList } from "../components/MovementList";

const HomeScreen = () => {
  return (
    <View>
      <CurrentBudgetHero />
      <MovementList />
    </View>
  );
};

export default HomeScreen;
