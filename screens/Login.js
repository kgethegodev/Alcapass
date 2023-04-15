import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Alert
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

//Firebase
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app";


//Adding stylesheet
import { styles } from "../assets/styles/styles";
import { variables } from "../assets/styles/variables";

const Login = ({ navigation }) => {
  //Input variables
  const [phoneNumber, setPhoneNumber] = useState("");

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
          placeholder="phone number."
          placeholderTextColor={variables.pinball}
          onChangeText={(newPhoneNumber) => setPhoneNumber(newPhoneNumber)}
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          defaultValue={phoneNumber}
        />

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
              <Ionicons name="logo-apple" size={32} color={variables.pinball} />
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
          <TouchableOpacity
            style={[styles.textCenter, styles.marginBottom25]}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={styles.smallText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
