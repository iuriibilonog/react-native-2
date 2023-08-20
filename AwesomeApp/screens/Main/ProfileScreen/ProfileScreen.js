import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <Text>ProfileScreen</Text>
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

export default ProfileScreen;
