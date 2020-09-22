import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";

const EnrolledScreen = (props) => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#dc4c18"
        translucent={true}
      />
      <Detail>Show this QR in the event's registration area</Detail>
      <ImageBackground
        source={require("../../assets/qr.png")}
        resizeMode="contain"
      ></ImageBackground>
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
  font-size: 20px;
  color: #aaa;
  padding: 40px 20px;
  width: 100%;
`;

const ImageBackground = styled.ImageBackground`
  width: 80%;
  height: 250px;
`;
