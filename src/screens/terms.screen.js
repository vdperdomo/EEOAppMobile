import React, { useState } from "react";
import { TouchableOpacity, View, StatusBar } from "react-native";
import { Form, Item, Label, Input, CheckBox } from "native-base";
import styled from "styled-components";
import i18n from "../locale/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const TermsScreen = (props) => {
  // const [values, setValues] = useState({
  //   username: "",
  //   password: "",
  //   terms: false,
  // });

  const goBack = () => {
    props.navigation.navigate("SignUp");
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#dc4c18" translucent={true} />
      <Page>
        <Title>{i18n.t("signup_terms")}</Title>
        <Form>
          <LinksTS>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <TextContainerTS style={{ flexShrink: 1 }}>
                <Text style={{ color: "#dc4c18" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </TextContainerTS>
            </TouchableOpacity>
          </LinksTS>
          <Button onPress={goBack} style={{ width: "100%" }}>
            <ButtonText>{i18n.t("go_back")}</ButtonText>
          </Button>
        </Form>
      </Page>
    </Container>
  );
};

export default TermsScreen;

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

const TextContainerTS = styled.Text`
  font-size: 20px;
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
