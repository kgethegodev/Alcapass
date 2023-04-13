import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../assets/styles/styles";
import Button from "./components/button";
import ButtonOpacity from "./components/buttonOpacity";
const logo = require("../assets/images/offwhite-logo.png");

const Welcome = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.textCenter]}>
        <Image source={logo} />
      </View>
      <View>
        <Text style={[styles.textCenter, styles.welcomeH1]}>Welcome to</Text>
        <Text style={[styles.textCenter, styles.welcomeH2]}>Alcapass</Text>
        <Text style={[styles.pTag, styles.textCenter]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <View>
        <Button name="Login" link="Login"/>
        <ButtonOpacity name="Sign up" link="SignUp"/>
      </View>
    </View>
  );
};

export default Welcome;
