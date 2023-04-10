import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import NeumorphInput from './NeumorphInput';
import UniversalButton from './UniversalButton';
import FacebookButton from './FacebookButton';
const Dwidth = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Signup = () => {
  return (
    <View
      style={{
        height: Height,
        width: Dwidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0dedf',
      }}>
      <Text
        style={{
          fontStyle: 'italic',
          color: '#000',
          marginBottom: 10,
          fontSize: 30,
          fontWeight: '700',
        }}>
        Monogram
      </Text>
      <NeumorphInput
        Width={Dwidth - 30}
        Height={50}
        JustifyContent={'space-around'}
        AlignSelf={'center'}
        TextSize={14}
        InputTextColor={'#000'}
        yAxisPadding={0}
        xAxisPadding={0}
        yAxisMargin={15}
        xAxisMargin={0}
        PlaceHolderText={'Phone, email address or username'}
        PlaceHolderTextColor={'grey'}
        BorderRadius={30}
        ShadowColor={'grey'}
        AlignItems={'center'}
        FlexDirection={'row'}
        ShadowOpacity={2}
        BackgroundColor={'#e0dedf'}
      />
      <NeumorphInput
        Width={Dwidth - 30}
        Height={50}
        JustifyContent={'space-around'}
        AlignSelf={'center'}
        TextSize={14}
        InputTextColor={'#000'}
        yAxisPadding={0}
        xAxisPadding={0}
        yAxisMargin={15}
        xAxisMargin={0}
        PlaceHolderText={'Full name'}
        PlaceHolderTextColor={'grey'}
        BorderRadius={30}
        ShadowColor={'grey'}
        AlignItems={'center'}
        FlexDirection={'row'}
        ShadowOpacity={2}
        BackgroundColor={'#e0dedf'}
      />
      <NeumorphInput
        Width={Dwidth - 30}
        Height={50}
        JustifyContent={'space-around'}
        AlignSelf={'center'}
        TextSize={14}
        InputTextColor={'#000'}
        yAxisPadding={0}
        xAxisPadding={0}
        yAxisMargin={15}
        xAxisMargin={0}
        PlaceHolderText={'Username'}
        PlaceHolderTextColor={'grey'}
        BorderRadius={30}
        ShadowColor={'grey'}
        AlignItems={'center'}
        FlexDirection={'row'}
        ShadowOpacity={2}
        BackgroundColor={'#e0dedf'}
      />
      <NeumorphInput
        Width={Dwidth - 30}
        Height={50}
        JustifyContent={'space-around'}
        AlignSelf={'center'}
        TextSize={14}
        InputTextColor={'#000'}
        yAxisPadding={0}
        xAxisPadding={0}
        yAxisMargin={15}
        xAxisMargin={0}
        PlaceHolderText={'Password'}
        PlaceHolderTextColor={'grey'}
        BorderRadius={30}
        ShadowColor={'grey'}
        AlignItems={'center'}
        FlexDirection={'row'}
        ShadowOpacity={2}
        BackgroundColor={'#e0dedf'}
      />
      <UniversalButton
        Self={'center'}
        TextSize={14}
        ButtonTextColor={'#000'}
        yAxisPadding={0}
        xAxisPadding={0}
        yAxisMargin={15}
        ButtonText={'Sign Up'}
        TextWeight={'600'}
      />
      <View style={styles.line_View}>
        <Text style={styles.OR_txt}>Or</Text>
      </View>
      <FacebookButton
        Height={50}
        Width={Dwidth - 30}
        LeftIconTintColor={'#000'}
        yAxisPadding={0}
        xAxisPadding={0}
        LeftIcon={require('../assets/facebook.png')}
        LeftIconWidth={20}
        LeftIconHeight={20}
        ButtonText={'Log in with facebook'}
        TextWeight={'600'}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: 200,
    height: 50,
    paddingLeft: 10,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    backgroundColor: '#EDEDED',
  },
  OR_txt: {
    fontFamily: 'Poppins-Regular',
    width: 50,
    height: 20,
    backgroundColor: '#e0dedf',
    position: 'absolute',
    alignSelf: 'center',
    bottom: -6,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
  line_View: {
    borderTopWidth: 1,
    width: '90%',
    height: 1,
    marginVertical: 25,
    borderColor: 'grey',
  },
});
