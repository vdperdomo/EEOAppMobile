import React, { useState } from "react";
import styled from "styled-components/native";
import { Linking } from "react-native";
import i18n from "../../locale/i18n";
import { WebView } from "react-native-webview";
import CountDown from "react-native-countdown-component";
import { differenceInSeconds } from "date-fns";

const EnrolledScreen = (props) => {
  const event = props.route.params;
  const [eventHappening, setEventHappening] = useState(false);
  const [countDownDate, setCountDownDate] = useState(differenceInSeconds(new Date(event.date), new Date()));

  const eventHappensNow = () => {
    setCountDownDate(0);
    setEventHappening(true);
  };

  const liveEventInfo = (
    <>
      <Detail>Show this QR in the event's registration area</Detail>
      <ImageBackground source={require("../../../assets/qr.png")} resizeMode="contain"></ImageBackground>
    </>
  );

  const eventSoon = (
    <>
      <Detail>{i18n.t("event_soon")}</Detail>
      <CountDown
        until={countDownDate}
        size={35}
        digitStyle={{ backgroundColor: "#dc4c18" }}
        digitTxtStyle={{ color: "#fff" }}
        onFinish={eventHappensNow}
        running={countDownDate > 0}
      />
    </>
  );

  const eventNow = <Title>{i18n.t("event_happening")}</Title>;

  const links = (
    <>
      <Link onPress={() => Linking.openURL(event.linkOnline)}>{i18n.t("online_event_click")}</Link>
      {eventHappening ? (
        <Link onPress={() => props.navigation.navigate("SurveySlider", event)}>{i18n.t("survey")}</Link>
      ) : null}
    </>
  );

  const postEvent = (
    <WebView
      allowsFullscreenVideo
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction
      source={{ uri: event.linkVideo }}
    />
  );

  return (
    <Container>
      {eventHappening ? eventNow : eventSoon}
      {event.online ? links : liveEventInfo}
      {event.finished ? postEvent : null}
    </Container>
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
  font-size: 25px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding: 5px 0;
`;
