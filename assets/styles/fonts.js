import { useFonts } from "expo-font";

export default function fonts() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("../fonts/Montserrat-Light.ttf"),
    "Montserrat-SemiBold": require("../fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("../fonts/Montserrat-Bold.ttf"),
  });
}

export { fonts };
