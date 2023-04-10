import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';

const UploadImage = ({
  ShadowRadius,
  ShadowOpacity,
  BorderRadius,
  BackgroundColor,
  Width,
  Height,
  AlignItems,
  JustifyContent,
  AlignSelf,
  IconTintColor,
  IconPosition,
  IconHeight,
  IconWidth,
}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Neomorph
        // inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        darkShadowColor="grey"
        lightShadowColor="#fff"
        style={{
          shadowRadius: ShadowRadius,
          shadowOpacity: ShadowOpacity,
          borderRadius: BorderRadius,
          backgroundColor: BackgroundColor,
          width: Width,
          height: Height,
          alignItems: AlignItems,
          justifyContent: JustifyContent,
          alignSelf: AlignSelf,
        }}>
        <Image
          source={require('../../assets/add.png')}
          style={{
            height: IconHeight,
            width: IconWidth,
            alignSelf: IconPosition,
            tintColor: IconTintColor,
          }}
          resizeMode={'contain'}
        />
      </Neomorph>
      <Text style={{color: 'grey', margin: 10}}>Edit Profile</Text>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({});
