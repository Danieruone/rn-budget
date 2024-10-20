import React from "react";
import { StyleSheet, View } from "react-native";
import { CurrentBudgetHero } from "../components/CurrentBudgetHero";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CurrentBudgetHero />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
