import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';

const Threedots = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
      }}>
      <Neomorph
        inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        darkShadowColor="grey"
        lightShadowColor="#fff"
        style={{
          shadowRadius: 2,
          shadowOpacity: 2,
          borderRadius: 10,
          backgroundColor: '#e0dedf',
          width: 8,
          height: 8,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}></Neomorph>
      <Neomorph
        inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        darkShadowColor="grey"
        lightShadowColor="#fff"
        style={{
          shadowRadius: 2,
          shadowOpacity: 2,
          borderRadius: 10,
          marginHorizontal: 5,

          backgroundColor: '#e0dedf',
          width: 8,
          height: 8,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}></Neomorph>
      <Neomorph
        inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        darkShadowColor="grey"
        lightShadowColor="#fff"
        style={{
          shadowRadius: 2,
          shadowOpacity: 2,
          borderRadius: 10,
          backgroundColor: '#e0dedf',
          width: 8,
          height: 8,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}></Neomorph>
    </View>
  );
};

export default Threedots;

const styles = StyleSheet.create({});
