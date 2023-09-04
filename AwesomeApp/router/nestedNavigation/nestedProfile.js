import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../screens/Main/ProfileScreen/ProfileScreen";
import OnePostScreen from "../../screens/Main/OnePostScreen/OnePostScreen";
import { Image } from "react-native";

const ProfileStack = createStackNavigator();

const ProfileRoutes = () => {
  return (
    <ProfileStack.Navigator initialRouteName={ProfileScreen}>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="OnePostScreen"
        component={OnePostScreen}
        options={{
          headerTitle: "Коментарі",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,

          headerBackImage: () => (
            <Image
              source={require("../../img/arrow-left.png")}
              style={{ marginLeft: 16 }}
            />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoutes;
