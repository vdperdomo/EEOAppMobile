import React, { useState } from "react";
import { View } from "react-native";
import { Form, Item, Label, Input, CheckBox, ListItem } from "native-base";
import styled from "styled-components";
import i18n from "../../locale/i18n";
import { Picker } from "@react-native-community/picker";
import DatePicker from "react-native-datepicker";
import { showMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";

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
    showMessage({
      message: "Success!!!",
      description: "Your account has been successfully created",
      type: "default",
      backgroundColor: "#DE411B", // background color
      color: "white",
      animationDuration: 250,
      style: {
        top: 0,
      }
    });

    setTimeout(() => {
      props.navigation.navigate("LogIn");
    }, 2000)
  };

  return (
    <>
      <FlashMessage position="top" />
      <Container>
        <Page>
          <Title>{ i18n.t("personal_info_title") }</Title>

          <Form>
            <Item stackedLabel style={ { marginLeft: 0, marginBottom: 30 } }>
              <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_name") }</Label>
              <Input
                style={ { height: 20, margin: 0 } }
                onChangeText={ (val) => setValues({ ...values, name: val }) }
                value={ values.name } />
            </Item>

            <View style={ { marginLeft: 0, marginBottom: 20 } }>
              <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_birthdate") }</Label>
              <DatePicker
                mode="date"
                placeholder=""
                format="YYYY-MM-DD"
                minDate="1900-01-01"
                maxDate={ new Date() }
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={ false }
                customStyles={ {
                  dateText: {
                    padding: 0,
                    margin: 0,
                    //borderWidth: 0
                  },
                  dateInput: {
                    height: 20,
                    left: 2,
                    position: "absolute",
                    borderWidth: 0
                  },
                } }
                onDateChange={ (val) => setValues({ ...values, birthdate: val }) }
              />
            </View>

            <View style={ { marginLeft: 0, marginBottom: 10 } }>
              <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_role") }</Label>
              <Picker
                style={ { height: 50, width: '100%' } }
                selectedValue={ values.role }
                onValueChange={ (itemValue, itemIndex) => setValues({ ...values, role: itemValue }) }
              >
                <Picker.Item label="Choose one" value="0" enabled={ false } />
                <Picker.Item label="Software Engineer" value="1" />
                <Picker.Item label="Quality Assurance" value="2" />
                <Picker.Item label="Designer / UX UI" value="3" />
                <Picker.Item label="Project Manager" value="4" />
                <Picker.Item label="Other" value="5" />
              </Picker>
            </View>

            <ListItem style={ { marginLeft: 0, borderBottomWidth: 0 } }>
              <CheckBox
                checked={ values.isStudying }
                onPress={ () => {
                  setValues({ ...values, isStudying: !values.isStudying });
                } }
                color="#dc4c18"
                style={ { marginRight: 25, borderRadius: 5 } }
              />
              <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_is_studying") }</Label>
            </ListItem>
            { (values.isStudying) ? (
              <Item stackedLabel style={ { marginLeft: 0 } }>
                <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_school") }</Label>
                <Input onChangeText={ (val) => setValues({ ...values, school: val }) } value={ values.school } />
              </Item>) : null
            }
            <ListItem style={ { marginLeft: 0, borderBottomWidth: 0 } }>
              <CheckBox
                checked={ values.isWorking }
                onPress={ () => {
                  setValues({ ...values, isWorking: !values.isWorking });
                } }
                color="#dc4c18"
                style={ { marginRight: 25, borderRadius: 5 } }
              />
              <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_is_working") }</Label>
            </ListItem>
            { (values.isWorking) ? (
              <Item stackedLabel style={ { marginLeft: 0 } }>
                <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_company") }</Label>
                <Input onChangeText={ (val) => setValues({ ...values, company: val }) } value={ values.company } />
              </Item>) : null
            }

            <ListItem style={ { marginLeft: 0, borderBottomWidth: 0 } }>
              <CheckBox
                checked={ values.notifyEvents }
                onPress={ () => {
                  setValues({ ...values, notifyEvents: !values.notifyEvents });
                } }
                color="#dc4c18"
                style={ { marginRight: 25, borderRadius: 5 } }
              />
              <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_notify_events") }</Label>
            </ListItem>

            <ListItem style={ { marginLeft: 0, borderBottomWidth: 0 } }>
              <CheckBox
                checked={ values.notifyJobSearches }
                onPress={ () => {
                  setValues({ ...values, notifyJobSearches: !values.notifyJobSearches });
                } }
                color="#dc4c18"
                style={ { marginRight: 25, borderRadius: 5 } }
              />
              <Label style={ { color: "#dc4c18" } }>{ i18n.t("personal_info_notify_job_searches") }</Label>
            </ListItem>
            <Footer>
              <Button type="button" onPress={ createAccount } style={ { backgroundColor: '#379bd7' } } >
                <ButtonText>{ i18n.t("skip_button") } </ButtonText>
              </Button>
              <Button type="button" onPress={ createAccount }>
                <ButtonText>{ i18n.t("signup_button") } </ButtonText>
              </Button>
            </Footer>
          </Form>
        </Page>
      </Container>

    </>
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
  padding-bottom: 30px;
`;

const Footer = styled.View`
  margin: 20px 0 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


const Button = styled.TouchableOpacity`
  border-radius: 5px;
  margin-top: 30px;
  background-color: #dc4c18;
  padding: 10px 20px;
  width: 140px;
  flex-direction: row;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
