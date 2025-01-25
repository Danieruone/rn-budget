import React, { useState } from "react";
import { View } from "react-native";

// components
import { CurrentBudgetHero } from "../components/CurrentBudgetHero";
import { MovementList } from "../components/MovementList";
import { TitleContainer } from "../components/TitleContainer";
import { FloatingActionButton } from "../components/shared/FloatingActionButton";

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
  const [totalAmount, setTotalAmount] = useState<number>(1000);
  const [movementsList, setNovementsList] =
    useState<Movement[]>(movementsDummy);

  return (
    <View style={{ flex: 1 }}>
      <TitleContainer />
      <CurrentBudgetHero totalAmount={totalAmount} />
      <MovementList movementsList={movementsList} />
      <FloatingActionButton />
    </View>
  );
};

export default HomeScreen;
