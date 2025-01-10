import React, { useState } from "react";

import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

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
  const [totalAmount, setTotalAmount] = useState<number>(1000);
  const [movementsList, setNovementsList] =
    useState<Movement[]>(movementsDummy);

  const handleAddPress = () => {
    alert("¡Botón flotante presionado!");
  };
  return (
    <View style={styles.container}>
      <CurrentBudgetHero totalAmount={totalAmount} />
      <MovementList movementsList={movementsList} />

      <TouchableOpacity style={styles.floatingButton} onPress={handleAddPress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 40,
    right: 30,
    backgroundColor: "#6200ee",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;
