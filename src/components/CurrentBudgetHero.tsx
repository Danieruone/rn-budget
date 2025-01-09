import React from "react";

import { StyleSheet, Text, View } from "react-native";

export const CurrentBudgetHero = ({ totalAmount }: { totalAmount: number }) => {
  return (
    <View style={styles.container}>
      <View style={styles.currencySymbolContainer}>
        <Text style={styles.currencySymbol}>$</Text>
      </View>
      <View>
        <Text style={styles.title}>Total Balance</Text>
        <Text style={styles.subTitle}>${totalAmount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    flexDirection: "row",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  currencySymbolContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#F5F3FC",
    borderRadius: 20,
    marginRight: 20,
  },
  currencySymbol: {
    fontSize: 40,
    color: "#A791E8",
    fontWeight: "light",
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 35,
    color: "#A791E8",
    fontWeight: "bold",
  },
});
