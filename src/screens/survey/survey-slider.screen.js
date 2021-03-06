import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import RatingSlider from "../../components/core/rating.component";


const SurveySliderScreen = (props) => {
  const [event, setevent] = useState(props.route.params);

  const goToSurveyOptions = () => {
    props.navigation.navigate("SurveyOptions", event);
  };


  const eventView = (
    <Container>
      <Image source={ event.titleImage } resizeMode="contain"></Image>
      <Detail>Your opinion matters!</Detail>
      <View style={ { flexDirection: "column", width: '100%' } }>
        <Container>
          <Text>Q#1 out of 3</Text>
          <SocialText>In general, what did you think about the event?</SocialText>
          <RatingSlider></RatingSlider>
        </Container>
      </View>
      <Container><Text style={ { height: 200 } }></Text></Container>
      <Button>
        <Touch onPress={ goToSurveyOptions } activeOpacity={ 0.8 } underlayColor="#ac2f02">
          <ButtonContent>Next</ButtonContent>
        </Touch>
      </Button>
    </Container>
  );

  return <>{ eventView }</>;
};

export default SurveySliderScreen;

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

const SmallText = styled.Text`
  font-size: 14px;
  color: #48545b;
  text-align: center;
  width: 90%;
`;

const SocialText = styled(Text)`
  text-align: center;
  margin-top: 20px;
  width: 90%;
  color: #48545b;
`;

const Button = styled.View`
  width: 90%;
  align-self: center;
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
