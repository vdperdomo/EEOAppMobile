import React, { useState } from "react";
import { TouchableOpacity, View, ScrollView } from "react-native";
import { Form, Item, Label, Input, CheckBox } from "native-base";
import styled from "styled-components";
import i18n from "../locale/i18n";

const PrivacyScreen = (props) => {
  const goBack = () => {
    props.navigation.navigate("SignUp");
  };

  return (
    <Container>
      <Page>
        <Title>{i18n.t("signup_privacy_policy")}</Title>
        <Form>
          <ScrollView
            contentContainerStyle={{
              // flex: 1,
              justifyContent: "space-between",
            }}
          >
            <TextContainerTXS style={{ flexShrink: 1 }}>
              <Text style={{ color: "#dc4c18" }}>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
                explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui
                dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non-numquam [do] eius modi
                tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.
              </Text>
            </TextContainerTXS>
          </ScrollView>
          <Button onPress={goBack} style={{ width: "100%" }}>
            <ButtonText>{i18n.t("go_back")}</ButtonText>
          </Button>
        </Form>
      </Page>
    </Container>
  );
};

export default PrivacyScreen;

const Container = styled.View`
  margin-top: 35px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Page = styled.View`
  padding: 0 50px;
  width: 100%;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding: 5px 0;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #aaa;
  font-weight: bold;
  height: 25px;
`;

const Links = styled.View`
  margin: 30px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinksTS = styled(Links)`
  justify-content: flex-start;
  align-items: flex-start;
`;

const TextContainerTXS = styled.Text`
  font-size: 15px;
  width: 280px;
`;

const Button = styled.TouchableOpacity`
  border-radius: 5px;
  margin-top: 30px;
  background-color: #dc4c18;
  padding: 12px 20px;
  width: 140px;
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
