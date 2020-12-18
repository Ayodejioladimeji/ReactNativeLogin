import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";

const LoginForm = () => {
  const [join, setJoin] = useState("JOIN CHAT");
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TextInput
        placeholder="Username or Email"
        placeholderTextColor="#fff"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#fff"
        returnKeyType="go"
        sdecureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onClick={() => setJoin("WELCOME")}>
          {join}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "orangered",
    marginBottom: 10,
    color: "#fff",
    paddingHorizontal: 10,
    focus: "none"
  },
  buttonContainer: {
    backgroundColor: "orangered",
    paddingVertical: 15,
    borderRadius: "25px"
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  }
});

export default LoginForm;
