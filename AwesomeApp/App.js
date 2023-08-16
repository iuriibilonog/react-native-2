import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router/router";

export default App = () => {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
};
