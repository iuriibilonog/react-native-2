import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PostCard from '../../../components/PostCard'

const ProfileScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState("");
  const [hasPermission, setHasPermission] = useState(null);

  const data = [
    {
      id: "1",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "0",
      place: "Ukraine",
    },
    {
      id: "2",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "9",
      place: "Ukraine",
    },
    {
      id: "3",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "9",
      place: "Ukraine",
    },
    {
      id: "4",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "9",
      place: "Ukraine",
    },
    {
      id: "5",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "9",
      place: "Ukraine",
    },
    {
      id: "6",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "9",
      place: "Ukraine",
    },
    {
      id: "7",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "9",
      place: "Ukraine",
    },
    {
      id: "8",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "9",
      place: "Ukraine",
    },
    {
      id: "9",
      title: "lis",
      uri: "https://plus.unsplash.com/premium_photo-1664298270691-6aa217e5b1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      likes: "32",
      comments: "9",
      place: "Ukraine",
    },
  ];


  const removePhoto = () => {
    setPhoto('')
  }

  const pickImage = async () => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
    if (hasPermission === false) return false
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      
      setPhoto(result?.assets[0]?.uri);
    }
  };

  return (
      <View style={s.container}>
    <ScrollView>
        <ImageBackground
          source={require("../../../img/background.png")}
          style={s.bgImg}
        >
          
          <View style={s.contentWrapper}>
            <TouchableOpacity>
              <Image
                source={require("../../../img/log-out1.png")}
                style={s.logOut}
              />
            </TouchableOpacity>
            {photo.length ? (
              <TouchableOpacity
                style={s.avatarHolder}
                // onPress={handleUploadAvatar}
              >
                <Image source={{uri: photo}} style={s.avatarPic}/>
                <TouchableOpacity style={s.discardIcon} onPress={removePhoto}>

                <Image source={require('../../../img/add_icon.png')} />
                </TouchableOpacity>

              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={s.avatarHolder}
                onPress={pickImage}
              >
                <Image source={require("../../../img/add_photo.png")} />
              </TouchableOpacity>
            )}

            <View>
              <Text style={s.profileTitle}>Natali Romanova</Text>
            </View>
            {data.length === 0 ? 
          <View style={s.noData}>
            <TouchableOpacity onPress={() => navigation.navigate('AddScreen')}>
              <Text style={s.noDataText}>Створити перший пост</Text>
            </TouchableOpacity>
          </View>
          : 
            <View style={s.list}>
              
                <PostCard data={data}/>
                
              
            </View>
          }
          </View>
        </ImageBackground>
    </ScrollView>
      </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
   height: Dimensions.get("window").height,
  },
  bgImg: {
    // flex: 1,
    resizeMode: "cover",
    
    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    // height: '100%'
  },
  noData: {
    // justifyContent: "center",
    alignItems: 'center',
    marginTop: 150,
  },
  noDataText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#212121",
    textDecorationLine: 'underline',
  },
  contentWrapper: {
    marginTop: 147,
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    // height: Dimensions.get("window").height,
  },
  avatarHolder: {
    width: 120,
    height: 120,
    position: "absolute",
    left: (Dimensions.get("window").width - 120) / 2,
    top: -60,
  },
  avatarPic: {
    width: "100%", 
    height: "100%",
    borderRadius: 16,
  },
  discardIcon: {
    position: 'absolute',
    top: 76,
    left: 102
  },
  logOut: {
    marginLeft: "auto",
    marginTop: 22,
  },
  profileTitle: {
    marginTop: 32,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    color: "#212121",
  },
  list: {
    marginTop: 33,
  },
  
});

export default ProfileScreen;
