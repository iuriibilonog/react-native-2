import React, { useState } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { useAllRoutes } from "./router/router";

export default App = () => {
  const [currentScreen, setCurrentScreen] = useState("PostsScreen");
  const navigationRef = useNavigationContainerRef();
  const routing = useAllRoutes(true, currentScreen);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => setCurrentScreen(navigationRef.getCurrentRoute().name)}
    >
      {routing}
    </NavigationContainer>
  );
};
