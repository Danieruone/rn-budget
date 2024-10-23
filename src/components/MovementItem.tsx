import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Movement } from "../models/movement";

export const MovementItem = ({ data }: { data: Movement }) => {
  return (
    <View style={styles.container}>
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
  },
  titleName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titleValue: {
    fontWeight: "bold",
  },
});
