import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import styled from "styled-components/native";
import moment from "moment";

const Event = (props) => {
  const [event, setevent] = useState(props.event);

  const date = moment(event.date);

  const goToDetails = () => {
    props.navigation.navigate("EventDetail", event);
  };

  const enrolledLabel = event.enrolled ? <Enrolled>Enrolled</Enrolled> : null;
  const onlineLabel = event.online ? <Online>Online</Online> : null;

  return (
    <Container onPress={goToDetails} activeOpacity={0.8} underlayColor="#000">
      <View>
        <Body enrolled={event.enrolled}>
          <DateContainer odd={props.odd}>
            <Day>{date.format("DD")}</Day>
            <Month>{date.format("MMM")}</Month>
          </DateContainer>
          <ImageBackground
            source={event.image}
            style={{ flex: 3 }}
            resizeMode="contain"
          ></ImageBackground>
        </Body>
        {enrolledLabel}
        {onlineLabel}
      </View>
    </Container>
  );
};

export default Event;

const Container = styled.TouchableHighlight`
  margin: 5px 10px;
  flex: 1;
`;

const Body = styled.View`
  width: 100%;
  max-height: 120px;
  overflow: hidden;
  flex-direction: row;
  opacity: ${(props) => (props.enrolled ? 0.8 : 1)};
`;

const DateContainer = styled.View`
  background-color: ${(props) => (props.odd ? "#d43a02" : "#929292")};
  flex: 1;
  height: 118px;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: center;
`;

const Day = styled.Text`
  color: white;
  text-align: center;
  font-size: 60px;
  text-shadow: #555 1px 0 10px;
`;

const Month = styled.Text`
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 27px;
  text-shadow: #555 1px 0 10px;
`;

const Enrolled = styled.Text`
  color: white;
  font-size: 20px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: #e64f19;
  padding: 3px 10px;
  border-radius: 5px;
`;

const Online = styled.Text`
  color: white;
  font-size: 20px;
  position: absolute;
  right: 90px;
  bottom: 5px;
  background-color: #379BD7;
  padding: 3px 10px;
  border-radius: 5px;
`;
