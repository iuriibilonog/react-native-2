import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  useEffect(() => {
    // const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
    //   setIsKeyboardShow(true);
    // });
    // const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
    //   setIsKeyboardShow(false);
    // });
    // return () => {
    //   showSubscription.remove();
    //   hideSubscription.remove();
    // };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={s.container}>
        <ImageBackground
          source={require("../../../img/background.png")}
          style={s.bgImg}
        >
          <View style={s.form}>
            <Image
              source={require("../../../img/add_photo.png")}
              style={s.avatarHolder}
            />

            <View>
              <Text style={s.title}>Увійти</Text>
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={{ marginTop: 33 }}>
                <TextInput
                  style={s.input}
                  placeholder={"Адреса електронної пошти"}
                  placeholderTextColor={"#BDBDBD"}
                />
              </View>

              <View
                style={
                  isKeyboardShow
                    ? { marginTop: 16, marginBottom: 32 }
                    : { marginTop: 16, marginBottom: 0 }
                }
              >
                <TextInput
                  style={s.input}
                  placeholder={"Пароль"}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                />
              </View>
            </KeyboardAvoidingView>
            {!isKeyboardShow && (
              <View
              // style={isKeyboardShow ? { display: "none" } : { display: "flex" }}
              >
                <View>
                  <TouchableOpacity style={s.submit} activeOpacity={0.7}>
                    <Text style={s.submitTitle}>Увійти</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={s.accQuestion}>
                      Немає акаунту?{" "}
                      <Text
                        style={{
                          textDecorationLine: "underline",
                        }}
                      >
                        Зареєструватися
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  form: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  title: {
    // font-family: Roboto;
    textAlign: "center",
    marginTop: 92,
    fontSize: 30,

    fontWeight: "500",
  },

  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "400",
    color: "#212121",
  },

  submit: {
    marginTop: 43,
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  submitTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
  },

  accQuestion: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 66,
  },

  avatarHolder: {
    position: "absolute",
    left: (Dimensions.get("window").width - 120) / 2,
    top: -60,
  },
});
