import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';

const UserName = ({
  Height,
  BorderRadius,
  Width,
  ShadowColor,
  yAxisMargin,
  FlexDirection,
  xAxisMargin,
  JustifyContent,
  BackgroundColor,
  AlignSelf,
  TextSize,
  InputTextColor,
  yAxisPadding,
  xAxisPadding,
  InputBorderRadius,
  AlignItems,
  PlaceHolderTextColor,
  PlaceHolderText,
}) => {
  return (
    <View>
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
          alignItems: AlignItems,
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
            borderRadius: InputBorderRadius,
          }}
        />
      </Neomorph>
    </View>
  );
};

export default UserName;

const styles = StyleSheet.create({});
