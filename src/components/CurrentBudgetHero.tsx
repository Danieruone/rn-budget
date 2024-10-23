import React from "react";

import { StyleSheet, Text, View } from "react-native";

export const CurrentBudgetHero = ({ totalAmount }: { totalAmount: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current budget</Text>
      <Text style={styles.subTitle}>${totalAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "black",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  subTitle: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
  },
});
