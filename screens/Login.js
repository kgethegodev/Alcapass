import React, { useState, createRef } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import Button from "./components/button";

//Adding stylesheet
import { styles } from "../assets/styles/styles";
import { variables } from "../assets/styles/variables";

const Login = () => {
  //Input variables
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //References
  const passwordRef = createRef();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h1}>Welcome</Text>
        <Text style={styles.h1}>back!</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style="flex:1"
      >
        <TextInput
          style={[styles.textInput, styles.marginBottom25]}
          placeholder="username or email."
          placeholderTextColor={variables.pinball}
          onChangeText={(newName) => setName(newName)}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordRef.current && passwordRef.current.focus()
          }
          blurOnSubmit={false}
          defaultValue={name}
        />

        <TextInput
          style={[styles.textInput, styles.marginBottom10]}
          placeholder="password."
          placeholderTextColor={variables.pinball}
          onChangeText={(newPassword) => setPassword(newPassword)}
          onSubmitEditing={Keyboard.dismiss}
          ref={passwordRef}
          keyboardType="default"
          returnKeyType="next"
          secureTextEntry={true}
          blurOnSubmit={false}
          defaultValue={password}
        />
        <TouchableOpacity style={[styles.textRight, styles.marginBottom25]}>
          <Text style={styles.smallText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.bgBoogieBlast, styles.marginBottom25]}
        >
          <Text style={[styles.buttonText]}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={styles.bottomAuthBlock}>
        <View>
          <Text style={[styles.smallText, styles.textCenter]}>
            Sign in with
          </Text>
          <View style={[styles.textCenter, styles.socialGroup]}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-google"
                size={32}
                color={variables.pinball}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-apple"
                size={32}
                color={variables.pinball}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-facebook"
                size={32}
                color={variables.pinball}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity style={[styles.textCenter, styles.marginBottom25]}>
            <Text style={styles.smallText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
