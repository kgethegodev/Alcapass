import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../assets/styles/styles";
import { useNavigation } from "@react-navigation/native";

export class ButtonOpacity extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
      }
}


export default function(props){
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate(props.link)}>
      <Text style={[styles.buttonText]}>{props.name}</Text>
    </TouchableOpacity>
  );
}
