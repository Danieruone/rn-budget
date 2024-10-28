import React, { useState } from "react";

// components
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MovementItem } from "./MovementItem";

// models
import { Movement } from "../models/movement";
import { CustomButton } from "./shared/CustomButton";
import { CustomModal } from "./shared/CustomModal";

export const MovementList = ({
  movementsList,
}: {
  movementsList: Movement[];
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Movement List</Text>
          <CustomButton
            title="Add movement"
            handlePress={() => setModalVisible(true)}
          />
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
        <></>
      </CustomModal>
    </>
  );
};

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
});
