import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const SurveyThanksScreen = () => {

  const goToEvents = () => {
    props.navigation.navigate("Events");
  };


  return (
    <Container>
      {/* <Image source={ event.titleImage } resizeMode="contain"></Image> */ }
      <Background source={ require('../../../assets/background-red.jpeg') } >
        <Image source={ require('../../../assets/webstories.png') } resizeMode="contain"></Image>
        <View style={ { flex: 3 } }>
          <SocialText>Thanks for your feedback!</SocialText>
          <SocialText>Looking forward to seeing you soon ;)</SocialText>
        </View>
        <View style={
          {
            flex: 4,
            justifyContent: "center",
            width: "80%",
            paddingBottom: 70
          } }>
          <SocialText >What would you like to do next?</SocialText>
          <Button style={ { flex: 1 } }>
            <Touch onPress={ goToEvents } activeOpacity={ 0.8 } underlayColor="#91a8b0">
              <ButtonContent>Enroll in upcoming events</ButtonContent>
            </Touch>
          </Button>
          <Button style={ { flex: 1 } }>
            <Touch onPress={ goToEvents } activeOpacity={ 0.8 } underlayColor="#91a8b0">
              <ButtonContent>Watch our sessions' recordings</ButtonContent>
            </Touch>
          </Button>
          <Button style={ { flex: 1 } }>
            <Touch onPress={ goToEvents } activeOpacity={ 0.8 } underlayColor="#91a8b0">
              <ButtonContent>Find out more about Endava</ButtonContent>
            </Touch>
          </Button>
        </View>
      </Background>
    </Container>
  )
}

export default SurveyThanksScreen;


const Container = styled.View`
  width: 100%;
  flex: 1;
`;

const Image = styled.Image`
  flex: 4;
  margin: 10px 0 30px 0;
  width: 75%;
  align-self: center;
`;

const Background = styled.ImageBackground`
  height: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const SocialText = styled.Text`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 5px;
  color: white;
`;

const Button = styled.View`
  padding-bottom: 10px;
`;

const Touch = styled.TouchableHighlight`
  margin-top: 10px;
  bottom: 10%;
  height: 40px;
  background-color: #9bb4be;
  justify-content: center;
`;
const ButtonContent = styled.Text`
  color: white;
  text-align: center;
  font-size: 22px;
`;
