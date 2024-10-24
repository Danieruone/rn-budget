import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Movement, movementType } from "../models/movement";

export const MovementItem = ({ data }: { data: Movement }) => {
  return (
    <View
      style={[
        styles.container,
        data.type === movementType.expense
          ? styles.expenseMovement
          : styles.incomeMovement,
      ]}
    >
      <View>
        <Text style={styles.titleName}>{data.name}</Text>
        <Text>{data.category}</Text>
      </View>
      <View>
        <Text style={styles.titleValue}>${data.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  titleName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titleValue: {
    fontWeight: "bold",
  },
  expenseMovement: {
    backgroundColor: "red",
  },
  incomeMovement: {
    backgroundColor: "green",
  },
});
