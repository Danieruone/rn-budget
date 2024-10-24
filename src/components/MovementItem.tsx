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
        <Text style={styles.titleValue}>
          {data.type === movementType.expense ? "-" : "+"} ${data.amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center",
    borderRadius: 12,
  },
  titleName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titleValue: {
    fontWeight: "bold",
  },
  expenseMovement: {
    backgroundColor: "#FFB6B3",
  },
  incomeMovement: {
    backgroundColor: "#BCE7BC",
  },
});
