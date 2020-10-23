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
      <Fireworks source={ require('../../../assets/circularFire.gif') } >
        <Detail>Thank you!!!</Detail>
        <SocialText>
          Your input will allow us to improve our Events.
                    </SocialText>
        <View style={
          {
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            width: "80%",
          } }>
          <Button style={ { flex: 1, marginLeft: 10 } }>
            <Touch onPress={ goToEvents } activeOpacity={ 0.8 } underlayColor="#ac2f02">
              <ButtonContent>Return to Menu</ButtonContent>
            </Touch>
          </Button>
        </View>
      </Fireworks>
    </Container>
  )
}

export default SurveyThanksScreen;


const Container = styled.View`
  width: 100%;
  flex: 1
`;

const Detail = styled.Text`
  flex: 1;
  font-size: 30px;
  color: #48545b;
  padding: 40px 20px;
  width: 100%;
  text-align: center;
`;

const Image = styled.Image`
  flex: 1;
  max-height: 150px;
  margin-top: 20px;
  width: 90%;
  align-self: center;
`;

const Fireworks = styled.ImageBackground`
  height: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
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
  width: 80%;
  flex: 6;
  font-size: 25px;
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
