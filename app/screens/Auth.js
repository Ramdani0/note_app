import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from "react-native";
import RoundIconBtn from "../components/RoundIconBtn";
import colors from "../misc/colors";
import Logo from '../components/Logo';

const Intro = ({ navigation }) => {
  const [name, setName] = useState("");
  const handleOnChangeText = (text) => setName(text);
  const [password, setPassword] = useState("");
  const handleOnChangePassword = (text) => setPassword(text);

  // const handleSubmit = async () => {
  //   const user = { name: name };
  //   await AsyncStorage.setItem("user", JSON.stringify(user));
  //   if (onFinish) onFinish();
  // };

  return (
    <>
      <Logo />
      <StatusBar hidden />
      <View style={styles.container}>
      {}
        <Text style={styles.mainTitle}>Selamat Datang Di</Text>
        <Text style={styles.subTitle}>Notes App</Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder="Username"
          style={styles.textInput}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={handleOnChangePassword}
          placeholder="Password"
          style={styles.textInput}
        />
        {name.trim().length >= 8 ? (
          <RoundIconBtn antIconName="arrowright" onPress={() => 
            navigation.navigate("NoteScreen")
          } />
        ) : null}
      </View>
    </>
  );
};

const width = Dimensions.get("window").width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: "center",
  },
  textInput: {
    // borderWidth: 2,
    borderColor: colors.PRIMARY,
    color: colors.PRIMARY,
    backgroundColor: colors.SECONDARY,
    width,
    height: 50,
    borderRadius: 15,
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 15,
  },
  mainTitle: {
    opacity: 0.5,
    fontSize: 20,
    color: 'black',
    fontWeight: '700'
  },
  subTitle: {
    marginBottom: 40,
    fontSize: 40,
    fontWeight: '800',
    color: colors.PRIMARY,
  },
  button: {
    // borderWidth: 2,
    backgroundColor: colors.PRIMARY,
    width,
    height: 50,
    borderRadius: 20,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },   
});

export default Intro;
