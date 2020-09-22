import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  StatusBar,
} from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, View, Text } from "react-native";
import EventListScreen from "./src/screens/event-list.screen";
import EventDetailScreen from "./src/screens/event-detail.screen";
import EnrolledScreen from "./src/screens/enrolled.screen";
import SignInScreen from "./src/screens/signin.screen";
import SignUpScreen from "./src/screens/signup.screen";
import { createDrawerNavigator } from "@react-navigation/drawer";

// const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(0, 45, 85)",
  },
};

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer
      theme={MyTheme}
      style={{ backgroundColor: MyTheme.primary }}
    >
      <Drawer.Navigator
        initialRouteName="LogIn"
        screenOptions={{ backgroundColor: MyTheme.primary }}
      >
        <Drawer.Screen
          name="LogIn"
          component={SignInScreen}
          options={{
            header: () => null,
          }}
        />
        <Drawer.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            header: () => null,
          }}
        />
        <Drawer.Screen
          name="Events"
          component={EventListScreen}
          // options={{
          //   title: "Event",
          //   header: (props) => (
          //     <Header {...props} title="Upcoming Events 123" />
          //   ),
          // }}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="EventDetail"
          component={EventDetailScreen}
          options={{
            title: "Event",
            header: (props) => <Header {...props} title="EEO Event" />,
          }}
        />
        <Drawer.Screen
          name="Enrolled"
          component={EnrolledScreen}
          options={{
            title: "Enrolled",
            header: (props) => <Header {...props} title="QR Code" />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function Header(props) {
  return (
    <ImageBackground
      style={{ width: "100%", height: 100 }}
      source={require("./assets/header-degre.png")}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          height: 100,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: "white",
            paddingLeft: 5,
            paddingBottom: 15,
          }}
        >
          {" "}
          {props.title}{" "}
        </Text>
      </View>
    </ImageBackground>
  );
}
