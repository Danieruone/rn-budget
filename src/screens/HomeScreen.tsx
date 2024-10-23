import React, { useState } from "react";
import { View } from "react-native";

// components
import { CurrentBudgetHero } from "../components/CurrentBudgetHero";
import { MovementList } from "../components/MovementList";

// models
import { Movement } from "../models/movement";

const HomeScreen = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [movementsList, setNovementsList] = useState<Movement[]>([]);
  return (
    <View>
      <CurrentBudgetHero totalAmount={totalAmount} />
      <MovementList />
    </View>
  );
};

export default HomeScreen;
