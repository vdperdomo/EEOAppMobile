import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground, View, Text } from "react-native";
import EventListScreen from "./src/screens/event-list.screen";
import EventDetailScreen from "./src/screens/event-detail.screen";
import EnrolledScreen from "./src/screens/enrolled.screen";
import SignInScreen from "./src/screens/signin.screen";
import SignUpScreen from "./src/screens/signup.screen";
import TermsScreen from "./src/screens/terms.screen";
import PrivacyScreen from "./src/screens/privacy.screen";
import PersonalInfoScreen from "./src/screens/personal-info.screen";
import i18n from "./src/locale/i18n";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(0, 45, 85)",
    background: "rgb(246, 248, 250)",
  },
};

export default function App() {
  return (

    <NavigationContainer theme={ MyTheme } style={ { backgroundColor: MyTheme.colors.primary } }>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={ { backgroundColor: MyTheme.primary } } StackType="slide">
        <Stack.Screen
          name="LogIn"
          component={ SignInScreen }
          options={ {
            title: i18n.t("Stack_login"),
            header: () => null,
          } }
        />
        <Stack.Screen
          name="SignUp"
          component={ SignUpScreen }
          options={ {
            title: i18n.t("Stack_signup"),
            header: () => null,
          } }
        />
        <Stack.Screen
          name="PersonalInfo"
          component={ PersonalInfoScreen }
          options={ {
            title: i18n.t("personal_info_title"),
            header: () => null,
          } }
        />
        <Stack.Screen
          name="Events"
          component={ EventListScreen }
          options={ {
            title: i18n.t("Stack_events"),
            header: () => null,
            // headerTitle: (props) => <LogoTitle {...props} />,
            // headerRight: () => <Button onPress={() => alert("This is a button!")} title="Info" color="#fff" />,
          } }
        />
        <Stack.Screen
          name="EventDetail"
          component={ EventDetailScreen }
          options={ {
            title: "Event",
            header: (props) => <Header { ...props } title="EEO Event" />,
          } }
        />
        <Stack.Screen
          name="Enrolled"
          component={ EnrolledScreen }
          options={ {
            title: "Enrolled",
            header: (props) => <Header { ...props } title="QR Code" />,
          } }
        />
        <Stack.Screen
          name="Terms"
          component={ TermsScreen }
          options={ {
            title: i18n.t("signup_terms_link"),
            header: (props) => <Header { ...props } />,
          } }
        />
        <Stack.Screen
          name="Privacy"
          component={ PrivacyScreen }
          options={ {
            title: i18n.t("signup_privacy_policy"),
            header: (props) => <Header { ...props } />,
          } }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Header(props) {
  return (
    <ImageBackground style={ { width: "100%", height: 100 } } source={ require("./assets/header-degre.png") }>
      <View
        style={ {
          flexDirection: "column",
          justifyContent: "flex-end",
          height: 100,
        } }
      >
        <Text
          style={ {
            fontSize: 35,
            color: "white",
            paddingLeft: 5,
            paddingBottom: 15,
          } }
        >
          { " " }
          { props.title }{ " " }
        </Text>
      </View>
    </ImageBackground>
  );
}
