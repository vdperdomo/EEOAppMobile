import React, { useState } from "react";
import { TouchableOpacity, View, StatusBar } from "react-native";
import { Form, Item, Label, Input, CheckBox } from "native-base";
import styled from "styled-components";
import i18n from "../locale/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SignUpScreen = (props) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    terms: false,
  });

  const createAccount = () => {
    props.navigation.navigate("PersonalInfo");
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#dc4c18" translucent={true} />
      <Page>
        <Title>{i18n.t("signup_title")}</Title>

        <Form>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ color: "#dc4c18" }}>{i18n.t("username")}</Label>
            <Input onChangeText={(val) => setValues({ ...values, username: val })} value={values.username} />
          </Item>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ color: "#dc4c18" }}>{i18n.t("password")}</Label>
            <Input secureTextEntry={true} onChangeText={(val) => setValues({ ...values, password: val })} value={values.password} />
          </Item>

          <LinksTS>
            <CheckBox
              checked={values.terms}
              onPress={() => {
                setValues({ ...values, terms: !values.terms });
              }}
              color="#dc4c18"
              style={{ marginRight: 25, borderRadius: 5 }}
            />
            <TextContainerTS style={{ flexShrink: 1 }}>
              <Text>{i18n.t("signup_terms")} </Text>
              <Text style={{ color: "#dc4c18" }} onPress={() => props.navigation.navigate("Terms")}>
                {i18n.t("signup_terms_link")}
              </Text>
              <Text> {i18n.t("signup_terms_and")} </Text>
              <Text style={{ color: "#dc4c18" }} onPress={() => props.navigation.navigate("Privacy")}>
                {i18n.t("signup_privacy_policy")}
              </Text>
            </TextContainerTS>
          </LinksTS>
          <Button onPress={createAccount} style={{ width: "100%" }}>
            <ButtonText>{i18n.t("signup_button")} </ButtonText>
          </Button>
        </Form>
        <Links>
          <Text>{i18n.t("signup_have_account")}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("LogIn")}>
            <Text style={{ paddingLeft: 10, color: "#dc4c18" }}>{i18n.t("signup_login_redirect")}</Text>
          </TouchableOpacity>
        </Links>
      </Page>
    </Container>
  );
};

export default SignUpScreen;

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
