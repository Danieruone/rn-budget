import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MovementItem } from "./MovementItem";

export const MovementList = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Movement List</Text>
    <ScrollView>
      <MovementItem />
      <MovementItem />
      <MovementItem />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
