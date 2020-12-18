import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LoginForm from "./LoginForm";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./chat.png")} />
          <Text style={styles.title}>LetsChat App</Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingBottom: 30
  },

  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },

  logo: {
    width: 70,
    height: 70
  },

  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Tahoma",
    textAlign: "center"
  }
});

export default App;
