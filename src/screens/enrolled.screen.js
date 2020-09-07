import React from 'react';
import styled from 'styled-components/native';

const EnrolledScreen = (props) => {

    return (
        <Container>
            <Detail>Show this QR in the event's registration area</Detail>
            <ImageBackground
                source={ require('../../assets/qr.png') }
                resizeMode="contain"
            >
            </ImageBackground>
        </Container>
    )
}

export default EnrolledScreen;


const Container = styled.View`
    justify-content: flex-start;
    align-items: center;
`;

const Detail = styled.Text`
    font-size: 20px;
    color: #aaa;
    padding: 40px 20px;
    width: 100%;
`;

const ImageBackground = styled.ImageBackground`
    width: 80%;
    height: 250px;
`;