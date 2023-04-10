import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import {banner} from '../styles';

const Banner = ({
  ShadowRadius,
  ShadowOpacity,
  BorderRadius,
  Padding,
  BackgroundColor,
  Height,
  AlignItems,
  JustifyContent,
  AlignSelf,
  Margin,
  Width,
}) => {
  return (
    <Neomorph
      // inner // <- enable shadow inside of neomorph
      swapShadows // <- change zIndex of each shadow color
      darkShadowColor="grey"
      lightShadowColor="#fff"
      style={{
        shadowRadius: ShadowRadius,
        shadowOpacity: ShadowOpacity,
        borderRadius: BorderRadius,
        padding: Padding,
        backgroundColor: BackgroundColor,
        height: Height,
        alignItems: AlignItems,
        justifyContent: JustifyContent,
        alignSelf: AlignSelf,
        margin: Margin,
        width: Width,
      }}>
      <Image
        source={{
          uri: 'https://img.icons8.com/external-prettycons-lineal-prettycons/512/external-gallery-multimedia-prettycons-lineal-prettycons.png',
        }}
        style={{
          height: '90%',
          width: '90%',
          tintColor: 'grey',
        }}
        resizeMode={'contain'}
      />
    </Neomorph>
  );
};

export default Banner;

const styles = StyleSheet.create({});
