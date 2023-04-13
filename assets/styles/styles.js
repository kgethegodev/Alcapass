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
  marginBottom10: {
    marginBottom: 10,
  },
  h1: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: variables.white,
  },
  textInput: {
    borderWidth: 1,
    borderColor: variables.pinball,
    paddingHorizontal: 16,
    paddingVertical: 13,
    color: variables.pinball,
    borderRadius: 6,
  },
  textRight: {
    alignSelf: "flex-end",
  },
  smallText: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: variables.pinball,
  },
  bottomAuthBlock: {
    justifyContent: "space-between",
  },
  socialGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 50
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    marginHorizontal: 12.5,
    backgroundColor: variables.socialGrey,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
