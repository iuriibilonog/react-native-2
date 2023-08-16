import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Login from "../screens/Auth/LoginScreen/LoginScreen";
import Register from "../screens/Auth/RegisterScreen/RegisterScreen";
import PostsScreen from "../screens/Main/PostsScreen/PostsScreen";
import AddScreen from "../screens/Main/AddPostScreen/AddPostScreen";
import ProfileScreen from "../screens/Main/ProfileScreen/ProfileScreen";
import logOut from "../img/log-out1.png";

const AuthStack = createStackNavigator(); // указывает на группу навигаторов
const MainStack = createBottomTabNavigator(); // указывает на группу навигаторов

export const useRoute = (isAuth) => {
  if (isAuth) {
    return (
      <MainStack.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            headerTitle: "Публікації",

            headerRight: () => (
              // <Button>
              <Image source={logOut} style={{ marginRight: 15 }} />
              // </Button>
            ),
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen name="AddScreen" component={AddScreen} />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
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
