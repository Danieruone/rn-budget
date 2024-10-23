import React, { useState } from "react";
import { View } from "react-native";

// components
import { CurrentBudgetHero } from "../components/CurrentBudgetHero";
import { MovementList } from "../components/MovementList";

const HomeScreen = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  return (
    <View>
      <CurrentBudgetHero totalAmount={totalAmount} />
      <MovementList />
    </View>
  );
};

export default HomeScreen;
