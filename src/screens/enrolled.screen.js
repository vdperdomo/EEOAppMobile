import React from "react";
import styled from "styled-components/native";
import { View, Text, Linking } from "react-native";
import i18n from "../locale/i18n";
import { WebView } from 'react-native-webview';

const EnrolledScreen = (props) => {
  const event = props.route.params;
  event.online = false;
  let eventView = (
    <Container>
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
        <Text style={ { color: 'blue' } }
          onPress={ () => Linking.openURL('https://teams.microsoft.com/l/entity/') }>
          {i18n.t("online_event_click")}
        </Text>
      </Container>
    )
  }

  if (event.finished) {
    eventView = (
      <WebView
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction
        source={{ uri: 'https://www.youtube.com/embed/jzD_yyEcp0M' }} 
      />
    )
  }

  return (
    <View>{ eventView }</View>
  );
};

export default EnrolledScreen;

const Container = styled.View`
  margin-top: 20px;
  justify-content: flex-start;
  align-items: center;
`;

const Detail = styled.Text`
  font-size: 20px;
  color: #aaa;
  padding: 40px 20px;
  width: 100%;
`;

const ImageBackground = styled.ImageBackground`
  width: 80%;
  height: 250px;
`;
