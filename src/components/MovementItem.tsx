import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const MovementItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleName}>Movement Name</Text>
        <Text>Category</Text>
      </View>
      <View>
        <Text style={styles.titleValue}>$2.000</Text>
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
