import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export const CurrentBudgetHero = ({ totalAmount }: { totalAmount: number }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <View style={styles.currencySymbolContainer}>
        <Text style={[styles.currencySymbol, { color: colors.primary }]}>
          $
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Total Balance</Text>
        <Text style={[styles.subTitle, { color: colors.primary }]}>
          ${totalAmount}
        </Text>
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
    fontWeight: "light",
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
