import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import RatingSlider from "../../components/core/rating.component";

const SurveyOptionsScreen = (props) => {
  const [event, setevent] = useState(props.route.params);

  const goToSurveySlider = () => {
    props.navigation.navigate("SurveySlider", event);
  };

  const goToSurveyText = () => {
    props.navigation.navigate("SurveyText", event);
  };

  const questions = ['Streaming Tool', 'Speaker', 'Content', 'Presentation', 'Interaction activities']

  const questionList = questions.map(question =>
    <RatingSlider key={ Math.random() } question={ question }></RatingSlider>
  )

  return (
    <Container>
      <Image style={ { flex: 1 } } source={ event.titleImage } resizeMode="contain"></Image>
      <Detail style={ { flex: 2 } }>Your opinion matters!</Detail>
      <View style={ { width: "100%", flex: 6 } }>
        <Body>
          <Text>Q#2 out of 3</Text>
          <SocialText>Please, rate the following aspects</SocialText>
          <ScrollView style={ { height: 330, width: "90%", paddingTop: 20 } }>{ questionList }</ScrollView>
        </Body>
      </View>
      <View style={
        {
          flexDirection: "row",
          justifyContent: "center",
          width: "80%",
          flex: 1
        } }>
        <Button style={ { flex: 1, marginRight: 10 } }>
          <Touch onPress={ goToSurveySlider } activeOpacity={ 0.8 } underlayColor="#ac2f02">
            <ButtonContent>Prev</ButtonContent>
          </Touch>
        </Button>
        <Button style={ { flex: 1, marginLeft: 10 } }>
          <Touch onPress={ goToSurveyText } activeOpacity={ 0.8 } underlayColor="#ac2f02">
            <ButtonContent>Next</ButtonContent>
          </Touch>
        </Button>
      </View>
    </Container>
  )

};

export default SurveyOptionsScreen;

const Container = styled.View`
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1
`;

const Body = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Detail = styled.Text`
  font-size: 30px;
  color: #aaa;
  width: 100%;
  margin-top: 30px;
  text-align: center;
  flex: 1
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
