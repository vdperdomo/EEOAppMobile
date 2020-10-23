import React from 'react';
import Slider from "@react-native-community/slider";
import styled from "styled-components/native";
import { View } from "react-native";


const RatingSlider = ({ question }) => {
  return (
    <View style={ { paddingVertical: 10, width: '100%' } }>
      <Text style={ { paddingBottom: 10 } }>{ question }</Text>
      <View style={ { width: '100%', alignItems: "center" } }>
        <RatingView>
          <Rating>Bad</Rating>
          <Rating>Regular</Rating>
          <Rating>Good</Rating>
          <Rating>Very Good</Rating>
          <Rating>Excellent</Rating>
        </RatingView>
        <Slider
          style={ { height: 30, width: '90%' } }
          minimumValue={ 0 }
          maximumValue={ 100 }
          step={ 25 }
          minimumTrackTintColor="#DE411B"
          maximumTrackTintColor="#9BB4BE"
          thumbImage={ require("./../../../assets/endava-adn-25.png") }
        />
      </View>
    </View>
  )

}

export default RatingSlider;


const RatingView = styled.View`
  flex-direction: row; 
  justify-content: space-between; 
  padding-top: 5px;
`;

const Rating = styled.Text`
  font-size: 14px;
  color: #48545b;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #48545b;
  font-weight: bold;
  text-align: left;
`;