import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
const Dwidth = Dimensions.get('window').width;

const FacebookButton = ({
  Height,
  Width,
  LeftIcon,
  LefIconHeight,
  LeftIconWidth,
  ButtonText,
  ButtonTextColor,
  Self,
  TextSize,
  yAxisMargin,
  LeftIconTintColor,
  TextWeight,
  facebook,
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
          borderRadius: 30,
          width: Width,
          height: Height,
          shadowRadius: 2,
          shadowColor: 'grey',
          marginVertical: yAxisMargin,
          alignItems: Self,
          flexDirection: 'row',
          justifyContent: 'center',
          shadowOpacity: 2,
          backgroundColor: '#e0dedf',
        }}>
        <Image
          style={{
            height: LefIconHeight,
            width: LeftIconWidth,
            tintColor: LeftIconTintColor,
            marginRight: 5,
          }}
          source={LeftIcon}
          resizeMode={'contain'}
        />
        <Text
          style={{
            fontSize: TextSize,
            color: ButtonTextColor,
            fontWeight: TextWeight,
            alignSelf: 'center',
          }}>
          {ButtonText}
        </Text>
      </Neomorph>
    </TouchableOpacity>
  );
};

export default FacebookButton;

const styles = StyleSheet.create({});
