import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Form, Item, Label, Input, CheckBox } from "native-base";
import styled from "styled-components";
import i18n from "../locale/i18n";
import { Picker } from "@react-native-community/picker";
import DatePicker from "react-native-datepicker";

const PersonalInfoScreen = (props) => {
  const [values, setValues] = useState({
    name: "",
    birthdate: "",
    role: "",
    isStudying: false,
    school: "",
    isWorking: false,
    company: "",
    notifyEvents: false,
    notifyJobSearches: false,
  });

  const createAccount = () => {
    // props.navigation.navigate('Main');
    props.navigation.navigate("Events");
  };

  return (
    <Container>
      <Page>
        <Title>{i18n.t("personal_info_title")}</Title>

        <Form>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_name")}</Label>
            <Input onChangeText={(val) => setValues({ ...values, name: val })} value={values.name} />
          </Item>
          <LinksTS>
            <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_birthdate")}</Label>
            <DatePicker
              style={{ width: 200 }}
              // date={state.birthdate}
              mode="date"
              placeholder=""
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(val) => setValues({ ...values, birthdate: val })}
            />
          </LinksTS>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_role")}</Label>
            <Picker
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => setValues({ ...values, role: itemValue })}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </Item>
          <TouchableOpacity
            onPress={() => {
              setValues({ ...values, isStudying: !values.isStudying });
            }}
          >
            <LinksTS>
              <CheckBox
                checked={values.isStudying}
                onPress={() => {
                  setValues({ ...values, isStudying: !values.isStudying });
                }}
                color="#dc4c18"
                style={{ marginRight: 25, borderRadius: 5 }}
              />
              <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_is_studying")}</Label>
            </LinksTS>
          </TouchableOpacity>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_school")}</Label>
            <Input onChangeText={(val) => setValues({ ...values, school: val })} value={values.school} />
          </Item>
          <TouchableOpacity
            onPress={() => {
              setValues({ ...values, isWorking: !values.isWorking });
            }}
          >
            <LinksTS>
              <CheckBox
                checked={values.isWorking}
                onPress={() => {
                  setValues({ ...values, isWorking: !values.isWorking });
                }}
                color="#dc4c18"
                style={{ marginRight: 25, borderRadius: 5 }}
              />
              <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_is_working")}</Label>
            </LinksTS>
          </TouchableOpacity>
          <Item floatingLabel style={{ marginLeft: 0 }}>
            <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_company")}</Label>
            <Input onChangeText={(val) => setValues({ ...values, company: val })} value={values.company} />
          </Item>
          <TouchableOpacity
            onPress={() => {
              setValues({ ...values, notifyEvents: !values.notifyEvents });
            }}
          >
            <LinksTS>
              <CheckBox
                checked={values.notifyEvents}
                onPress={() => {
                  setValues({ ...values, notifyEvents: !values.notifyEvents });
                }}
                color="#dc4c18"
                style={{ marginRight: 25, borderRadius: 5 }}
              />
              <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_notify_events")}</Label>
            </LinksTS>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValues({ ...values, notifyJobSearches: !values.notifyJobSearches });
            }}
          >
            <LinksTS>
              <CheckBox
                checked={values.notifyJobSearches}
                onPress={() => {
                  setValues({ ...values, notifyJobSearches: !values.notifyJobSearches });
                }}
                color="#dc4c18"
                style={{ marginRight: 25, borderRadius: 5 }}
              />
              <Label style={{ color: "#dc4c18" }}>{i18n.t("personal_info_notify_job_searches")}</Label>
            </LinksTS>
          </TouchableOpacity>

          {/* <LinksTS>
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
          </Button> */}
        </Form>
        {/* <Links>
          <Text>{i18n.t("signup_have_account")}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("LogIn")}>
            <Text style={{ paddingLeft: 10, color: "#dc4c18" }}>{i18n.t("signup_login_redirect")}</Text>
          </TouchableOpacity>
        </Links> */}
      </Page>
    </Container>
  );
};

export default PersonalInfoScreen;

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
