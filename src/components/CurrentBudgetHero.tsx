import React from "react";

import { StyleSheet, Text, View } from "react-native";

export const CurrentBudgetHero = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current budget</Text>
      <Text style={styles.subTitle}>$1.000</Text>
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
