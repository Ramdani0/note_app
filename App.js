import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Auth from "./app/screens/Auth";
import NoteScreen from "./app/screens/NoteScreen";
import NoteDetail from "./app/components/NoteDetail";
import NoteProvider from "./app/contexts/NoteProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
  }, []);

  const RenderNoteScreen = (props) => <NoteScreen {...props} user={user} />;

  // if (isAppFirstTimeOpen) return <Auth onFinish={findUser} />;
  return (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator
          screenOptions={{ headerTitle: "", headerTransparent: true }}
        >
          <Stack.Screen component={Auth} name="Auth" />
          <Stack.Screen
            component={RenderNoteScreen}
            name="NoteScreen"
            options={({navigation})=>({
              headerBackVisible: false,
              headerBackButtonMenuEnable: false,
              headerTitle: " ",
              // headerStyle:{
              //   backgroundColor: "white",
              // },
              headerTintColor: "#eeeeee",
              headerRight: () => (
                <TouchableHighlight onPress={() => navigation.navigate("Auth")}>
                  <MaterialCommunityIcons name="logout" size={30} color="#3385ff" />
                </TouchableHighlight>
              )
            })}
          />
          <Stack.Screen component={NoteDetail} name="NoteDetail" />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
