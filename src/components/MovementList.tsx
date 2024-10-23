import React from "react";

// components
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MovementItem } from "./MovementItem";

// models
import { Movement } from "../models/movement";

export const MovementList = ({
  movementsList,
}: {
  movementsList: Movement[];
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Movement List</Text>
    {movementsList.length === 0 ? (
      <View>
        <Text style={styles.noMovementsMessage}>No movements yet</Text>
      </View>
    ) : (
      <ScrollView>
        {movementsList.map((movement: Movement) => (
          <MovementItem key={movement.id} />
        ))}
      </ScrollView>
    )}
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
  noMovementsMessage: {
    textAlign: "center",
    marginTop: 20,
  },
});
