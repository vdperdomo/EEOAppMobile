import React, { useState } from 'react';
import { Form, Item, Label, Input } from 'native-base';
import styled from 'styled-components';
import i18n from '../locale/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const SignInScreen = (props) => {
  const [values, setValues] = useState({ username: '', password: '' });

  const login = () => {
    // props.navigation.navigate('Main');
    props.navigation.navigate('Events')
  };

  return (
    <Container>
      <Logo source={ require('../../assets/logo.png') }></Logo>
      <Page>
        <Title>{ i18n.t("login_title") }</Title>
        <Text >{ i18n.t("login_subtitle") }</Text>

        <Form>
          <Item floatingLabel style={ { marginLeft: 0 } }>
            <Label style={ { color: '#dc4c18' } }>{ i18n.t('username') }</Label>
            <Input 
            onChangeText={ (val) => setValues({ ...values, username: val }) } 
            value={ values.username } />
          </Item>
          <Item floatingLabel style={ { marginLeft: 0 } }>
            <Label style={ { color: '#dc4c18' } }>{ i18n.t('password') }</Label>
            <Input
              onChangeText={ (val) => setValues({ ...values, password: val }) }
              value={ values.password } />
          </Item>
          <Button onPress={ login } style={ { width: '100%' } }>
            <ButtonText>{ i18n.t('login_button') } </ButtonText>
          </Button>
        </Form>
        <SocialText>{ i18n.t('social_profile') }</SocialText>
        <Social>

          <Button onPress={ login } style={ { backgroundColor: '#d0021b' } }>
            <FontAwesomeIcon
              icon={ faEnvelope }
              color={ 'white' }
              size={ 20 }
            />
            <ButtonContainer>
              <ButtonText>{ i18n.t('google_button') }</ButtonText>
            </ButtonContainer>
          </Button>
          <Button onPress={ login } style={ { backgroundColor: '#3b5998' } }>
            <FontAwesomeIcon
              icon={ faFacebookF }
              color={ 'white' }
              size={ 20 }
            />
            <ButtonContainer>
              <ButtonText>{ i18n.t('facebook_button') }</ButtonText>
            </ButtonContainer>
          </Button>
        </Social>
        <Links>
          <Text>{ i18n.t("recovert_password") }</Text>
          <Text style={ { color: '#dc4c18' } }>{ i18n.t("new_account") }</Text>
        </Links>
      </Page>


    </Container>
  );
}

export default SignInScreen;



const Container = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.Image`
  margin: 30px 0 50px 0;
  height: 80px;
  width: 110px;
`

const Page = styled.View`
  padding: 0 50px;
  width: 100%;
  flex: 10px;
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
`;

const SocialText = styled(Text)`
  text-align: center;
  margin-top: 20px;
`;


const Button = styled.TouchableOpacity`
  border-radius: 5px;
  margin-top: 30px;
  background-color: #dc4c18;
  padding: 15px 20px;
  width: 140px;
  flex-direction: row;
  justify-content: center;
`;

const ButtonContainer = styled.View`
  padding-left: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const Social = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Links = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
`;

