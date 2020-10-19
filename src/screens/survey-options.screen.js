import React, { useState } from "react";
import { ScrollView, View, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import { Linking } from "react-native";
import i18n from "../locale/i18n";
import { WebView } from "react-native-webview";
import { SectionGrid } from "react-native-super-grid";

const SurveyOptionsScreen = (props) => {
  const [event, setevent] = useState(props.route.params);

  const goToSurveySlider = () => {
    props.navigation.navigate("SurveySlider", event);
  };

  const goToSurveyText = () => {
    props.navigation.navigate("SurveyText", event);
  };

  const tableHeader = () => {
    return (
      <TableHeader>
        <View style={{ flex: 2, alignSelf: "stretch", padding: 0 }}><HeaderText></HeaderText></View>
        <View style={{ flex: 2, alignSelf: "stretch", padding: 0 }}><HeaderText>Bad</HeaderText></View>
        <View style={{ flex: 2, alignSelf: "stretch", padding: 0 }}><HeaderText>Regular</HeaderText></View>
        <View style={{ flex: 2, alignSelf: "stretch", padding: 0 }}><HeaderText>Good</HeaderText></View>
        <View style={{ flex: 2, alignSelf: "stretch", padding: 0 }}><HeaderText>Very Good</HeaderText></View>
        <View style={{ flex: 2, alignSelf: "stretch", padding: 0 }}><HeaderText>Excellent</HeaderText></View>
      </TableHeader>
    );
  };

  const eventView = (
    <Container>
      <Image source={event.titleImage} resizeMode="contain"></Image>
      <Detail>Your opinion matters!</Detail>
      <View style={{ flexDirection: "column", width:"90%" }}>
        <Container>
          <Text>Q#2 out of 3</Text>
          <SocialText>Please, rate the following aspects</SocialText>
          {tableHeader()}
        </Container>
      </View>
      <Container>
        <Text style={{ height: 200 }}></Text>
      </Container>
      <View style={{ flexDirection: "row", selfAlign: "center", width: "80%" }}>
        <Button style={{ width: "50%", marginRight: 10 }}>
          <Touch onPress={goToSurveySlider} activeOpacity={0.8} underlayColor="#ac2f02">
            <ButtonContent>Prev</ButtonContent>
          </Touch>
        </Button>
        <Button style={{ width: "50%", marginLeft: 10 }}>
          <Touch onPress={goToSurveyText} activeOpacity={0.8} underlayColor="#ac2f02">
            <ButtonContent>Next</ButtonContent>
          </Touch>
        </Button>
      </View>
    </Container>
  );

  return <>{eventView}</>;
};

export default SurveyOptionsScreen;

const TableHeader = styled.View`
  flex-direction: row; 
  width: 100%; 
  background-color: #DE411B;
`;
// self-align: center; 
const HeaderText = styled.Text`
  font-size: 14px;
  color: #FFFFFF;
  text-align: left;
  border: 1px black;
  padding: 0;
  height: 80px;
`;

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

const Link = styled.Text`
  margin-top: 50px;
  color: #dc4c18;
  font-size: 25px;
`;

const Image = styled.Image`
  max-height: 150px;
  margin-top: 20px;
  width: 90%;
  align-self: center;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #48545b;
  font-weight: bold;
  text-align: left;
`;

const SocialText = styled(Text)`
  text-align: center;
  margin-top: 20px;
  width: 90%;
  color: #48545b;
`;

const Button = styled.View`
  padding-bottom: 20px;
`;
const Touch = styled.TouchableHighlight`
  bottom: 10%;
  height: 40px;
  border-radius: 5px;
  background-color: #d43a02;
  justify-content: center;
`;
const ButtonContent = styled.Text`
  color: white;
  text-align: center;
  font-size: 22px;
`;
