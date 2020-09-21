import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import ConfirmationModal from '../components/core/modal.component';

const EventDetailScreen = (props) => {

    const [event, setEvent] = useState(props.route.params)

    const [confirmationDialog, setConfirmationDialog] = useState(false)

    const enroll = () => {
        if (event.enrolled)
            return props.navigation.navigate('Enrolled', event)
        setConfirmationDialog(true)
    }

    const updateEnrollment = () => {
        event.enrolled = true; 
        setEvent(event)
        setConfirmationDialog(false)
        //props.navigation.state.params.onGoBack('123');
    }


    const button = (event.enrolled) ? <ButtonContent> See QR Code</ButtonContent> : <ButtonContent> Join me</ButtonContent>

    return (
        <Container>
            <ScrollView>
                <View style={ { flexDirection: "column" } }>
                    <Image source={ event.image } resizeMode="contain"></Image>
                    <Details>{ event.content }</Details>
                </View>
            </ScrollView>
            <Button>
                <Touch
                    onPress={ enroll }
                    activeOpacity={ 0.8 }
                    underlayColor="#ac2f02">
                    { button }
                </Touch>
            </Button>
            <ConfirmationModal
                visible={ confirmationDialog }
                cancel={ setConfirmationDialog }
                confirm={ updateEnrollment }
                title={ "Join me" }
                content={ "We really want to have you here! Would you like to join the event? " }
            ></ConfirmationModal>
        </Container>
    )
}

export default EventDetailScreen;


const Container = styled.View`
    justify-content: center;
    flex: 1;
`;

const Image = styled.Image`
    max-height: 150px;
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
   width: 90%;
   align-self: center;
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

