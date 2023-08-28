import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Image, Pressable } from "react-native";

import Login from "../screens/Auth/LoginScreen/LoginScreen";
import Register from "../screens/Auth/RegisterScreen/RegisterScreen";
import PostsScreen from "../screens/Main/PostsScreen/PostsScreen";
import AddScreen from "../screens/Main/AddPostScreen/AddPostScreen";
import ProfileScreen from "../screens/Main/ProfileScreen/ProfileScreen";
import logOut from "../img/log-out1.png";

const AuthStack = createStackNavigator(); // указывает на группу навигаторов
const MainStack = createBottomTabNavigator(); // указывает на группу навигаторов

const renderTabsOrder = (currentScreen, onTabPress) => {
  const handleGoBack = (navigation) => {
    navigation.goBack();
    onTabPress("PostsScreen");
  };

  if (currentScreen === "ProfileScreen") {
    return (
      <>
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            headerTitle: "Публікації",
            headerTitleAlign: "center",

            headerRight: () => (
              <Image source={logOut} style={{ marginRight: 15 }} />
            ),

            tabBarIcon: ({ tintColor, image, focused }) => {
              image = require("../img/grid.png");
              return (
                <View
                  onStartShouldSetResponder={(e) => onTabPress("PostsScreen")}
                >
                  <Image source={image} />
                </View>
              );
            },
          }}
        />

        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ tintColor, image, focused }) => {
              image =
                currentScreen === "ProfileScreen"
                  ? require("../img/profile_active.png")
                  : require("../img/user.png");
              return (
                <View
                  onStartShouldSetResponder={(e) => onTabPress("ProfileScreen")}
                >
                  <Image source={image} />
                </View>
              );
            },
          }}
        />

        <MainStack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{
            tabBarIcon: ({ tintColor, image, focused }) => {
              image = currentScreen !== "ProfileScreen"
                ? require("../img/new.png")
                : require("../img/add_non_active.png");
              return (
                <View onStartShouldSetResponder={() => onTabPress("AddScreen")}>
                  <Image source={image} />
                </View>
              );
            },
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            headerTitle: "Публікації",
            tabBarButton: (props) =>
              currentScreen === "AddScreen" ? null : <Pressable {...props} />,

            headerRight: () => (
              <Image source={logOut} style={{ marginRight: 15 }} />
            ),
            headerTitleAlign: "center",

            tabBarIcon: ({ tintColor, image, focused }) => {
              image = require("../img/grid.png");
              return (
                <View
                  onStartShouldSetResponder={(e) => onTabPress("PostsScreen")}
                >
                  <Image source={image} />
                </View>
              );
            },
          }}
        />

        <MainStack.Screen
          name="AddScreen"
          // component={AddScreen}
          options={({ navigation }) => ({
            headerTitle: "Створити публікацію",
            headerTitleAlign: "center",
            headerLeft: (props) => (
              <Pressable
                onPress={() => handleGoBack(navigation)}
                style={{ marginLeft: 16 }}
              >
                <Image
                  source={require("../img/arrow-left.png")}
                  style={{ marginRight: 15 }}
                />
              </Pressable>
            ),
            tabBarStyle: { display: 'none' },

            tabBarIcon: ({ tintColor, image, focused }) => {
              image = currentScreen !== "ProfileScreen"
                ? require("../img/new.png")
                : require("../img/add_non_active.png");

              return (
                <View
                  onStartShouldSetResponder={(e) => onTabPress("AddScreen")}
                >
                  <Image source={image} />
                </View>
              );
            },
            
          })}
        >
          {(props) => <AddScreen {...props} onTabPress={onTabPress} />}
        </MainStack.Screen>

        <MainStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarButton: (props) =>
              currentScreen === "AddScreen" ? null : <Pressable {...props} />,
            tabBarIcon: ({ tintColor, image, focused }) => {
              image =
                currentScreen === "ProfileScreen"
                  ? require("../img/profile_active.png")
                  : require("../img/user.png");
              return (
                <View
                  onStartShouldSetResponder={(e) => onTabPress("ProfileScreen")}
                >
                  <Image source={image} />
                </View>
              );
            },
          }}
        />
      </>
    );
  }
};

export const useAllRoutes = (isAuth, currentScreen) => {
  const [screenOnFocus, setScreenOnFocus] = useState(currentScreen);
  const onTabPress = (screen) => {
    setScreenOnFocus(screen);
  };
  if (isAuth) {
    return (
      <MainStack.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingHorizontal: 82,
            paddingTop: 9,
            paddingBottom: 22,
            height: 71,
          },
        })}
      >
        {renderTabsOrder(screenOnFocus, onTabPress)}
      </MainStack.Navigator>
    );
  } else {
    return (
      <AuthStack.Navigator>
        
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        
      </AuthStack.Navigator>
    );
  }
};
