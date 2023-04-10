import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
const Dwidth = Dimensions.get('window').width;

const Password = ({
  Width,
  PlaceHolderText,
  PlaceHolderTextColor,
  Self,
  TextSize,
  InputTextColor,
  yAxisPadding,
  xAxisPadding,
  yAxisMargin,
}) => {
  return (
    <Neomorph
      swapShadows
      darkShadowColor="grey"
      lightShadowColor="#fff"
      inner
      // <-- This is important for the shadow to be inside the button
      style={{
        borderRadius: 30,
        width: Width,
        height: 50,
        shadowRadius: 2,
        shadowColor: 'grey',
        marginVertical: yAxisMargin,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowOpacity: 2,
        backgroundColor: '#e0dedf',
      }}>
      <TextInput
        placeholder={PlaceHolderText}
        placeholderTextColor={PlaceHolderTextColor}
        style={{
          width: '85%',
          alignSelf: Self,
          fontSize: TextSize,
          color: InputTextColor,
          paddingVertical: yAxisPadding,
          paddingHorizontal: xAxisPadding,
          borderRadius: 25,
        }}
      />
    </Neomorph>
  );
};

export default Password;

const styles = StyleSheet.create({});
