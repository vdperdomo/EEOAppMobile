import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, View, Text } from "react-native";
import EventListScreen from "./src/screens/event-list.screen";
import EventDetailScreen from "./src/screens/event-detail.screen";
import EnrolledScreen from "./src/screens/enrolled.screen";
import SignInScreen from "./src/screens/signin.screen";
import SignUpScreen from "./src/screens/signup.screen";
import TermsScreen from "./src/screens/terms.screen";
import PrivacyScreen from "./src/screens/privacy.screen";
import PersonalInfoScreen from "./src/screens/personal-info.screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import i18n from "./src/locale/i18n";

// const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(0, 45, 85)",
    background: "rgb(246, 248, 250)",
  },
};

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer theme={MyTheme} style={{ backgroundColor: MyTheme.colors.primary }}>
      <Drawer.Navigator initialRouteName="LogIn" screenOptions={{ backgroundColor: MyTheme.primary }} drawerType="slide">
        <Drawer.Screen
          name="LogIn"
          component={SignInScreen}
          options={{
            title: i18n.t("drawer_login"),
            header: () => null,
          }}
        />
        <Drawer.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: i18n.t("drawer_signup"),
            header: () => null,
          }}
        />
        <Drawer.Screen
          name="PersonalInfo"
          component={PersonalInfoScreen}
          options={{
            title: i18n.t("personal_info_title"),
            header: () => null,
          }}
        />
        <Drawer.Screen
          name="Events"
          component={EventListScreen}
          options={{
            title: i18n.t("drawer_events"),
            header: () => null,
            // headerTitle: (props) => <LogoTitle {...props} />,
            // headerRight: () => <Button onPress={() => alert("This is a button!")} title="Info" color="#fff" />,
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
        <Drawer.Screen
          name="Terms"
          component={TermsScreen}
          options={{
            title: i18n.t("signup_terms_link"),
            header: (props) => <Header {...props} />,
          }}
        />
        <Drawer.Screen
          name="Privacy"
          component={PrivacyScreen}
          options={{
            title: i18n.t("signup_privacy_policy"),
            header: (props) => <Header {...props} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function Header(props) {
  return (
    <ImageBackground style={{ width: "100%", height: 100 }} source={require("./assets/header-degre.png")}>
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
