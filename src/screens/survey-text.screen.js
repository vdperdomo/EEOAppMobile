import React, { useState } from "react";
import { ScrollView, View, TouchableHighlight, TextInput } from "react-native";
import styled from "styled-components/native";
import { Linking } from "react-native";
import i18n from "../locale/i18n";
import { WebView } from "react-native-webview";
import { SectionGrid } from "react-native-super-grid";

const SurveyTextScreen = (props) => {
  const [event, setevent] = useState(props.route.params);

  const goToSurveyOptions = () => {
    props.navigation.navigate("SurveyOptions", event);
  };

  const thankYouMessage = () => {
    showMessage({
      message: "Thank you!!!",
      description: "Your input will allow us to improve our events",
      type: "default",
      backgroundColor: "#DE411B", // background color
      color: "white",
      animationDuration: 1000,
      style: {
        top: -50,
      },
    });
  };

  const eventView = (
    <Container>
      <Image source={event.titleImage} resizeMode="contain"></Image>
      <Detail>Your opinion matters!</Detail>
      <View style={{ flexDirection: "column", width: "90%" }}>
        <Container>
          <Text>Q#3 out of 3</Text>
          <SocialText>
            Your thoughts, suggestions and ideas are more than welcome! Feel free to leave your comments :)
          </SocialText>
          {/* <HeaderText>Take into account that 0 means “Bad” and 10 stands for “Excellent”</HeaderText> */}
          <MultiText>
            <TextInput multiline numberOfLines={40}/>
          </MultiText>
        </Container>
      </View>
      <Container>
        <Text style={{ height: 20 }}></Text>
      </Container>
      <View style={{ flexDirection: "row", selfAlign: "center", width: "80%" }}>
        <Button style={{ width: "50%", marginRight: 10 }}>
          <Touch onPress={goToSurveyOptions} activeOpacity={0.8} underlayColor="#ac2f02">
            <ButtonContent>Prev</ButtonContent>
          </Touch>
        </Button>
        <Button style={{ width: "50%", marginLeft: 10 }}>
          <Touch onPress={thankYouMessage} activeOpacity={0.8} underlayColor="#ac2f02">
            <ButtonContent>Done!</ButtonContent>
          </Touch>
        </Button>
      </View>
    </Container>
  );

  return <>{eventView}</>;
};

export default SurveyTextScreen;

const MultiText = styled.View`
  margin-top: 10px;
  background-color: #F0F3F3;
  border: 1px black;
  height: 200px;
  width: 90%;
`;

const BottomButtons = styled.View`
  flex-direction: row;
  self-align: center;
  width: 80%;
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

const HeaderText = styled.Text`
  font-size: 14px;
  color: #ffffff;
  text-align: left;
  width: 90%;
  height: 90;
  transform: rotate(90deg);
  border: 1px black;
  padding: 0;
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
