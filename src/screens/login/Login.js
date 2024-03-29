import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Main from "../main-page/Main";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    email: "",
    password: "",
  };

  handlePress() {
    if (this.state.email === "G" && this.state.password == "q") {
      alert("yeeah");
      this.props.navigation.navigate("Main");
    } else {
      alert("Wrong User Selected");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Foody</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Şifre..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Parolanızı mı unuttunuz?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.handlePress()}
        >
          <Text style={styles.loginText}>Giriş yap</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Kayıt ol</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Giriş yapmadan devam et</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Main: {
    screen: Main,
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    marginTop: 10,
  },
});
