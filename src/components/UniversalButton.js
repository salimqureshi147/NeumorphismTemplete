import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
const Dwidth = Dimensions.get('window').width;

const UniversalButton = ({
  Height,
  Width,
  ButtonText,
  ButtonTextColor,
  Self,
  TextSize,
  TextWeight,
  BorderRadius,
  InputTextColor,
  yAxisPadding,
  xAxisPadding,
  yAxisMargin,
}) => {
  return (
    <TouchableOpacity>
      <Neomorph
        swapShadows
        darkShadowColor="grey"
        lightShadowColor="#fff"
        //   inner
        // <-- This is important for the shadow to be inside the button
        style={{
          borderRadius: BorderRadius,
          width: Width,
          height: Height,
          shadowRadius: 2,
          shadowColor: 'grey',
          marginVertical: yAxisMargin,
          alignItems: Self,
          flexDirection: 'row',
          justifyContent: 'space-around',
          shadowOpacity: 2,
          backgroundColor: '#e0dedf',
        }}>
        <Text
          style={{
            fontSize: TextSize,
            color: ButtonTextColor,
            fontWeight: TextWeight,
          }}>
          {ButtonText}
        </Text>
      </Neomorph>
    </TouchableOpacity>
  );
};

export default UniversalButton;

const styles = StyleSheet.create({});
