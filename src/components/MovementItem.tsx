import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Movement, movementType } from "../models/movement";
import Icon from "react-native-vector-icons/AntDesign";
import { useTheme } from "@react-navigation/native";

export const MovementItem = ({ data }: { data: Movement }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <View
          style={[
            styles.iconMovementContainer,
            data.type === movementType.expense
              ? styles.expenseMovement
              : styles.incomeMovement,
          ]}
        >
          {data.type === movementType.expense ? (
            <Icon name="arrowdown" size={18} color={"red"} />
          ) : (
            <Icon name="arrowup" size={18} color={"green"} />
          )}
        </View>
        <View>
          <Text style={[styles.titleName, { color: colors.text }]}>
            {data.name}
          </Text>
          <Text style={{ color: colors.text }}>{data.category}</Text>
        </View>
      </View>
      <View>
        <Text
          style={[
            styles.titleValue,
            data.type === movementType.expense
              ? styles.titleValueTextExpense
              : styles.titleValueTextIncome,
          ]}
        >
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
    fontWeight: "normal",
    fontSize: 18,
  },
  titleValueTextExpense: {
    color: "#DC2625",
  },
  titleValueTextIncome: {
    color: "#16A349",
  },
  expenseMovement: {
    backgroundColor: "#FEE6E5",
  },
  incomeMovement: {
    backgroundColor: "#E3FBEA",
  },
  infoBlock: {
    flexDirection: "row",
  },
  iconMovementContainer: {
    marginRight: 10,
    padding: 10,
    borderRadius: 15,
  },
});
