import React from "react";

// components
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { MovementItem } from "./MovementItem";

// models
import { Movement } from "../models/movement";

export const MovementList = ({
  movementsList,
}: {
  movementsList: Movement[];
}) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Movement List</Text>
      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          { opacity: pressed ? 0.8 : 1.0 },
        ]}
      >
        <Text style={styles.addButtonText}>Add movement</Text>
      </Pressable>
    </View>
    {movementsList.length === 0 ? (
      <View>
        <Text style={styles.noMovementsMessage}>No movements yet</Text>
      </View>
    ) : (
      <ScrollView>
        {movementsList.map((movement: Movement) => (
          <MovementItem key={movement.id} data={movement} />
        ))}
      </ScrollView>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  noMovementsMessage: {
    textAlign: "center",
    marginTop: 20,
  },
  addButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#90E0EF",
  },
  addButtonText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
