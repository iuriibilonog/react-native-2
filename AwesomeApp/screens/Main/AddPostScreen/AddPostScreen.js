import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddScreen = () => {
  return (
    <View style={s.container}>
      <Text>AddScreen</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddScreen;
