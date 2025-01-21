import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

// components
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MovementItem } from "./MovementItem";

// models
import { Movement } from "../models/movement";
import { CustomModal } from "./shared/CustomModal";
import { AddMovementModal } from "./AddMovementModal";

export const MovementList = ({
  movementsList,
}: {
  movementsList: Movement[];
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { colors } = useTheme();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.primary }]}>
            Movement List
          </Text>
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

      <CustomModal
        visible={modalVisible}
        handleClose={() => setModalVisible(false)}
      >
        <AddMovementModal />
      </CustomModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    margin: 20,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
  },
  noMovementsMessage: {
    textAlign: "center",
    marginTop: 20,
  },
});
