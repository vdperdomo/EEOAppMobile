import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styled from "styled-components/native";

const SurveyTextScreen = (props) => {
  const [event, setevent] = useState(props.route.params);

  const goToSurveyOptions = () => {
    props.navigation.navigate("SurveyOptions", event);
  };

  const goToSurveyThanks = () => {
    props.navigation.navigate("SurveyThanks", event);
  };

  const eventView = (
    <Container>
      <Image style={ { flex: 1 } } source={ event.titleImage } resizeMode="contain"></Image>
      <Detail style={ { flex: 1 } }>Your opinion matters!</Detail>
      <View style={ { width: "100%", flex: 6 } }>
        <Body>
          <Text>Q#3 out of 3</Text>
          <SocialText>
            Your thoughts, suggestions and ideas are more than welcome! Feel free to leave your comments :)
          </SocialText>
          <MultiText>
            <TextInput multiline />
          </MultiText>
        </Body>
      </View>
      <View style={
        {
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          width: "80%",
        } }>
        <Button style={ { flex: 1, marginRight: 10 } }>
          <Touch onPress={ goToSurveyOptions } activeOpacity={ 0.8 } underlayColor="#ac2f02">
            <ButtonContent>Prev</ButtonContent>
          </Touch>
        </Button>
        <Button style={ { flex: 1, marginLeft: 10 } }>
          <Touch onPress={ goToSurveyThanks } activeOpacity={ 0.8 } underlayColor="#ac2f02">
            <ButtonContent>Done!</ButtonContent>
          </Touch>
        </Button>
      </View>
    </Container>
  );

  return <>{ eventView }</>;
};

export default SurveyTextScreen;

const MultiText = styled.View`
  margin-top: 10px;
  background-color: #F0F3F3;
  border: 1px black;
  height: 100px;
  width: 90%;
`;

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
  padding: 40px 20px;
  width: 100%;
  text-align: center;
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
