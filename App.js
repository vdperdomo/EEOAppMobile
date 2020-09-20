import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, View, Text } from 'react-native';
import EventListScreen from './src/screens/event-list.screen';
import EventDetailScreen from './src/screens/event-detail.screen';
import EnrolledScreen from './src/screens/enrolled.screen';
import SignInScreen from './src/screens/signin.screen';


const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0, 45, 85)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={ MyTheme } style={ { backgroundColor: MyTheme.primary } }>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={ { backgroundColor: MyTheme.primary } }>
        <Stack.Screen
          name="LogIn"
          component={ SignInScreen }
        />
        <Stack.Screen
          name="Events"
          component={ EventListScreen }
          options={ {
            title: 'Event',
            header: props => <Header { ...props } title="Upcoming Events" />
          } } />
        <Stack.Screen
          name="EventDetail"
          component={ EventDetailScreen }
          options={ {
            title: 'Event',
            header: props => <Header { ...props } title="EEO Event" />
          } } />
        <Stack.Screen
          name="Enrolled"
          component={ EnrolledScreen }
          options={ {
            title: 'Enrolled',
            header: props => <Header { ...props } title="QR Code" />
          } } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Header(props) {
  return (
    <ImageBackground
      style={ { width: '100%', height: 100 } }
      source={ require('./assets/header-degre.png') }
    >
      <View style={ { flexDirection: 'column', justifyContent: 'flex-end', height: 100 } }>
        <Text style={ { fontSize: 35, color: 'white', paddingLeft: 5, paddingBottom: 15 } }> { props.title } </Text>
      </View>
    </ImageBackground>
  );
}