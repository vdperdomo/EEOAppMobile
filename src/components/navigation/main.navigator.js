import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, View, Text, StatusBar } from "react-native";
import styled from "styled-components/native";
import i18n from "./../../locale/i18n";
import EventListScreen from "./../../screens/event/event-list.screen";
import EventDetailScreen from "./../../screens/event/event-detail.screen";
import EnrolledScreen from "./../../screens/event/enrolled.screen";
import SignInScreen from "./../../screens/session/signin.screen";
import SignUpScreen from "./../../screens/session/signup.screen";
import TermsScreen from "./../../screens/session/terms.screen";
import PrivacyScreen from "./../../screens/session/privacy.screen";
import PersonalInfoScreen from "./../../screens/session/personal-info.screen";
import MenuScreen from "./../../screens/menu/menu.screen";
import MiniMenu from "./../../screens/menu/mini-menu";
import SurveySliderScreen from "./../../screens/survey/survey-slider.screen";
import SurveyOptionsScreen from "./../../screens/survey/survey-options.screen";
import SurveyTextScreen from "./../../screens/survey/survey-text.screen";
import SurveyThanksScreen from "./../../screens/survey/survey-thanks.screen";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Stack = createStackNavigator();


const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn" StackType="slide">
                <Stack.Screen
                    name="Menu"
                    component={ MenuScreen }
                    options={ {
                        title: i18n.t("menu_menu"),
                        header: () => null,
                    } }
                />
                <Stack.Screen
                    name="LogIn"
                    component={ SignInScreen }
                    options={ {
                        title: i18n.t("menu_login"),
                        header: () => null,
                    } }
                />
                <Stack.Screen
                    name="SignUp"
                    component={ SignUpScreen }
                    options={ {
                        title: i18n.t("menu_signup"),
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
                        title: i18n.t("menu_events"),
                        header: (props) => <Header { ...props } title="EEO Events" />,
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
                <Stack.Screen
                    name="SurveySlider"
                    component={ SurveySliderScreen }
                    options={ {
                        title: "Survey Slider",
                        header: (props) => <Header { ...props } />,
                    } }
                />
                <Stack.Screen
                    name="SurveyOptions"
                    component={ SurveyOptionsScreen }
                    options={ {
                        title: "Survey Options",
                        header: (props) => <Header { ...props } />,
                    } }
                />
                <Stack.Screen
                    name="SurveyText"
                    component={ SurveyTextScreen }
                    options={ {
                        title: "Survey Text",
                        header: (props) => <Header { ...props } />,
                    } }
                />
                <Stack.Screen
                    name="SurveyThanks"
                    component={ SurveyThanksScreen }
                    options={ {
                        title: "Survey Thanks",
                        header: (props) => <Header { ...props } />,
                    } }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default MainNavigator;


function Header(props) {
    return (
        <>
            {/*  <MiniMenu navigation={ props.navigation } /> */ }
            <View
                style={ {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 120,
                } }
            >
                <View style={ { flex: 1, justifyContent: "center", alignItems: "flex-start", marginTop: 40 } }>
                    <FontAwesomeIcon icon={ faBars } size={ 32 } style={ { left: 20 } } />
                </View>
                <View style={ { flex: 3, justifyContent: "flex-end", alignItems: "center" } }>
                    <Image style={ { width: 100, height: 65, marginBottom: 18 } } source={ require("./../../../assets/logo.png") } />
                </View>
                <View style={ { flex: 1, justifyContent: "flex-end", alignItems: "flex-end" } }>
                    <User><Image style={ { width: 35, height: 35, } } source={ require("./../../../assets/user.jpeg") } /></User>
                </View>
            </View>
            <StatusBar barStyle="dark-content" hidden={ false } backgroundColor="#f0f3f3" translucent={ true } />
        </>
    );
}


const User = styled.View`
  background-color: red;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 50px;
`;



{/* <View>
<MiniMenu navigation={ props.navigation } /> 
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
  <StatusBar barStyle="light-content" hidden={ false } backgroundColor="#dc4c18" translucent={ true } />
</ImageBackground>
</View> */}