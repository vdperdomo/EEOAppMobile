import React from "react";
import styled from "styled-components/native";
import { Linking } from "react-native";
import i18n from "../locale/i18n";
import { WebView } from 'react-native-webview';
import CountDown from 'react-native-countdown-component';
import {differenceInSeconds} from 'date-fns';

const EnrolledScreen = (props) => {
  const event = props.route.params;

  const countDownDate = differenceInSeconds( new Date(event.date), new Date());

  let eventView = (
    <Container>
       <Detail>Thanks for subscribing! The event will start soon</Detail>
       <CountDown
        until={countDownDate}
        size={35}
        digitStyle={{backgroundColor: '#dc4c18'}}
        digitTxtStyle={{color: '#fff'}}
      />
      <Detail>Show this QR in the event's registration area</Detail>
      <ImageBackground
        source={ require("../../assets/qr.png") }
        resizeMode="contain"
      ></ImageBackground>
    </Container>
  )
  
  if (event.online) {
    eventView = (
      <Container>
       <Detail>Thanks for subscribing! The event will start soon</Detail>
       <CountDown
        until={countDownDate}
        size={35}
        digitStyle={{backgroundColor: '#dc4c18'}}
        digitTxtStyle={{color: '#fff'}}
      />
        <Link
          onPress={ () => Linking.openURL(event.linkOnline) }>
          {i18n.t("online_event_click")}
        </Link>
        <Link
          onPress={ () => props.navigation.navigate("SurveySlider", event) }>
          {i18n.t("survey")}
        </Link>
      </Container>
    )
  }
  

  if (event.finished) {
    eventView = (
      <WebView
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction
        source={{ uri: event.linkVideo }} 
      />
    )
  }

  return (
    <>{ eventView }</>
  );
};

export default EnrolledScreen;

const Container = styled.View`
  margin-top: 20px;
  justify-content: flex-start;
  align-items: center;
`;

const Detail = styled.Text`
  font-size: 30px;
  color: #aaa;
  padding: 40px 20px;
  width: 100%;
  text-align: center;
`;

const ImageBackground = styled.ImageBackground`
  width: 80%;
  height: 250px;
`;

const Link = styled.Text`
  margin-top: 50px;
  color: #dc4c18;
  font-size: 25px
`;