import React from "react";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const FloatingActionButton = () => {
  const { colors } = useTheme();
  const handleAddPress = () => {
    alert("¡Botón flotante presionado!");
  };

  return (
    <TouchableOpacity
      style={[styles.floatingButton, { backgroundColor: colors.primary }]}
      onPress={handleAddPress}
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    position: "absolute",
    bottom: 40,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
