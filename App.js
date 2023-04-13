import { RootStack } from "./navigators/RootStack";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";

import useFonts from "./hooks/useFonts";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return <RootStack />;
}
