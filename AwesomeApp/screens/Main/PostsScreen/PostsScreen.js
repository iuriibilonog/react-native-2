import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <View style={s.userInfoWrapper}>
        <View style={s.avatarWraper}>
          <Image source={require("../../../img/avatar_mini.png")} />
        </View>
        <View style={s.contactsWrapper}>
          <Text style={s.contactsName}>Name Name</Text>
          <Text style={s.contactsMail}>email@email.com</Text>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 1,
  },
  userInfoWrapper: {
    marginTop: 32,
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarWraper: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  contactsWrapper: {
    marginLeft: 8,
  },
  contactsName: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "700",
  },
  contactsMail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
    fontWeight: "400",
  },
});

export default PostsScreen;
