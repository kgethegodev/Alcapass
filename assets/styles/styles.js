import { StyleSheet } from "react-native";
import { variables } from "./variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.nero,
    paddingHorizontal: 42,
    justifyContent: "space-around",
  },
  welcomeH1: {
    fontFamily: "Montserrat-Regular",
    fontSize: 32,
    color: variables.white,
  },
  welcomeH2: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: variables.boogieBlast,
    marginBottom: 25,
  },
  textCenter: {
    alignSelf: "center",
  },
  pTag: {
    fontSize: 16,
    fontFamily: "Montserrat-Light",
    color: variables.white,
  },
  button: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
  },
  buttonText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
    color: variables.white,
    alignSelf: "center",
  },
  bgBoogieBlast: {
    backgroundColor: variables.boogieBlast,
  },
  marginBottom25: {
    marginBottom: 25,
  },
});

export { styles };
