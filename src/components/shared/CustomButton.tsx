import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export const CustomButton = ({
  title,
  handlePress,
}: {
  title: string;
  handlePress: () => void;
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.addButton,
        { opacity: pressed ? 0.8 : 1.0 },
      ]}
      onPress={handlePress}
    >
      <Text style={styles.addButtonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
