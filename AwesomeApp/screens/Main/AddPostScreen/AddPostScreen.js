import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const AddScreen = ({ navigation, onTabPress }) => {
  function handleBackButtonClick() {
    const canGoBack = navigation.canGoBack();
    if (canGoBack) {
      navigation.goBack();
      onTabPress("PostsScreen");

      return true;
    }
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);
  return (
    <View style={s.container}>
      <View style={s.imgWrapper}>
        <Image
          style={s.whiteCamIcon}
          source={require("../../../img/cam_white.png")}
        />
      </View>
      <TouchableOpacity>
        <Text style={s.loadImgText}>Завантажте фото</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={s.form}>
          <TextInput placeholder={"Назва"} style={s.inputName} />
          <TextInput placeholder={"Місцевість"} style={s.inputPlace} />
        </View>
        <TouchableOpacity style={s.submitDisable}>
          <Text style={s.submitTextDisable}>Опублікувати</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  imgWrapper: {
    height: 240,
    marginTop: 32,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  loadImgText: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
  },
  form: {
    marginTop: 32,
  },
  inputName: {
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  inputPlace: {
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  submit: {
    marginTop: 32,
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  submitDisable: {
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  submitTextDisable: {
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default AddScreen;
