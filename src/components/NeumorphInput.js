import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
const Dwidth = Dimensions.get('window').width;

const NeumorphInput = ({
  Height,
  Width,
  JustifyContent,
  AlignSelf,
  ShadowRadius,
  xAxisMargin,
  ShadowColor,
  AlignItem,
  FlexDirection,
  BorderRadius,
  PlaceHolderText,
  PlaceHolderTextColor,
  TextSize,
  InputTextColor,
  yAxisPadding,
  xAxisPadding,
  yAxisMargin,
  BackgroundColor,
}) => {
  return (
    <Neomorph
      swapShadows
      darkShadowColor="grey"
      lightShadowColor="#fff"
      inner
      // <-- This is important for the shadow to be inside the button
      style={{
        borderRadius: BorderRadius,
        width: Width,
        height: Height,
        shadowRadius: 2,
        shadowColor: ShadowColor,
        marginVertical: yAxisMargin,
        alignItems: AlignItem,
        marginHorizontal: xAxisMargin,
        flexDirection: FlexDirection,
        justifyContent: JustifyContent,
        shadowOpacity: 2,
        backgroundColor: BackgroundColor,
      }}>
      <TextInput
        placeholder={PlaceHolderText}
        placeholderTextColor={PlaceHolderTextColor}
        style={{
          width: '85%',
          alignSelf: AlignSelf,
          fontSize: TextSize,
          color: InputTextColor,
          paddingVertical: yAxisPadding,
          paddingHorizontal: xAxisPadding,
          borderRadius: BorderRadius,
        }}
      />
    </Neomorph>
  );
};

export default NeumorphInput;

const styles = StyleSheet.create({});
