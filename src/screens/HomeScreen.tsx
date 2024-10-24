import React, { useState } from "react";
import { View } from "react-native";

// components
import { CurrentBudgetHero } from "../components/CurrentBudgetHero";
import { MovementList } from "../components/MovementList";

// models
import { Movement, movementType } from "../models/movement";

const movementsDummy: Movement[] = [
  {
    id: "1a",
    name: "Shopping",
    amount: 1000,
    category: "Home",
    type: movementType.expense,
  },
  {
    id: "2a",
    name: "Payment",
    amount: 2000,
    category: "Salary",
    type: movementType.income,
  },
];

const HomeScreen = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [movementsList, setNovementsList] =
    useState<Movement[]>(movementsDummy);
  return (
    <View>
      <CurrentBudgetHero totalAmount={totalAmount} />
      <MovementList movementsList={movementsList} />
    </View>
  );
};

export default HomeScreen;
