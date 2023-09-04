import React, { useEffect, useState } from "react";
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
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

const AddScreen = ({ navigation, onTabPress }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [isPhotoOnProcess, setIsPhotoOnProcess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    setIsLoading(false);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  function handleBackButtonClick() {
    const canGoBack = navigation.canGoBack();
    if (canGoBack) {
      navigation.goBack();
      onTabPress("PostsScreen");

      return true;
    }
  }

  const takePhoto = async () => {
    setIsPhotoOnProcess(true);

    const pic = await camera.takePictureAsync();
    await MediaLibrary.createAssetAsync(pic.uri);
    setIsPhotoOnProcess(false);

    setPhoto(pic.uri);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("first", result?.assets[0]?.uri);
      setPhoto(result?.assets[0]?.uri);
    }
  };

  const toggleCameraType = () => {
    type === CameraType.back
      ? setType(CameraType.front)
      : setType(CameraType.back);
  };

  const removePhoto = () => {
    if (photo.length) setPhoto("");
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={s.container}>
        {photo.length ? (
          <View style={s.imgWrapper}>
            <Image
              source={{ uri: photo }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        ) : (
          <Camera style={s.imgWrapper} ref={setCamera} type={type}>
            {isPhotoOnProcess ? (
              <View>
                <ActivityIndicator />
              </View>
            ) : (
              <View style={s.camControls}>
                <TouchableOpacity onPress={pickImage}>
                  <Image
                    style={s.camControlItem}
                    source={require("../../../img/galery.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={takePhoto}>
                  <Image
                    style={s.camControlItem}
                    source={require("../../../img/cam_transparent.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleCameraType}>
                  <Image source={require("../../../img/change_cam.png")} />
                </TouchableOpacity>
              </View>
            )}
          </Camera>
        )}

        <TouchableOpacity onPress={pickImage}>
          {photo.length ? (
            <Text style={s.loadImgText}>Редагувати фото</Text>
          ) : (
            <Text style={s.loadImgText}>Завантажте фото</Text>
          )}
        </TouchableOpacity>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={s.form}>
            <TextInput placeholder={"Назва"} style={s.inputName} />
            <View style={s.placeWrapper}>
              <Image
                style={s.iconPlace}
                source={require("../../../img/map-pin.png")}
              />
              <TextInput placeholder={"Місцевість"} style={s.inputPlace} />
            </View>
          </View>
          <TouchableOpacity style={s.submitDisable}>
            <Text style={s.submitTextDisable}>Опублікувати</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={s.trash}>
          <TouchableOpacity onPress={removePhoto}>
            <Image source={require("../../../img/trash.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    width: "100%",
  },
  placeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  iconPlace: {
    marginRight: 8,
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
  trash: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 22,
  },
  camControls: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 10,
  },
  camControlItem: {
    marginRight: 15,
  },
});

export default AddScreen;
