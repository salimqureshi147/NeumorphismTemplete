import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
const Width = Dimensions.get('window').width;

const Banner = () => {
  return (
    <Neomorph
      inner // <- enable shadow inside of neomorph
      swapShadows // <- change zIndex of each shadow color
      darkShadowColor="grey"
      lightShadowColor="#fff"
      style={{
        shadowRadius: 2,
        shadowOpacity: 2,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        backgroundColor: '#e0dedf',
        width: Width - 20,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Image
        source={require('../assets/banner2.jpg')}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 10,
        }}
        resizeMode={'contain'}
      />
    </Neomorph>
  );
};

export default Banner;

const styles = StyleSheet.create({});
