import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';

const EventDetailScreen = (props) => {
    const event = props.route.params;

    const enroll = () => {
        props.navigation.navigate('Enrolled', event)
    }

    const button = (event.enrolled) ?  <ButtonContent> See QR Code</ButtonContent> :  <ButtonContent> Join me</ButtonContent>

    return (
        <Container>
            <ScrollView>
                <Image source={ event.image }></Image>
                <Details>{ event.content }</Details>
            </ScrollView>
            <Button>
                <Touch 
                    onPress={ enroll }
                    activeOpacity={ 0.8 }
                    underlayColor="#ac2f02">
                        {button}
                </Touch>
            </Button>
        </Container>
    )
}

export default EventDetailScreen;


const Container = styled.View`
    justify-content: center;
    flex: 1;
`;

const Image = styled.ImageBackground`
    height: 200px;
    margin-top: 20px;
    width: 90%;
    align-self: center;
`;

const Details = styled.Text`
    width: 90%;
    align-self: center;
    margin-top: 20px;
    font-size: 20px;
`;

const Button = styled.View`
    bottom: 10%;
    width: 90%;
    left: 5%;
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

