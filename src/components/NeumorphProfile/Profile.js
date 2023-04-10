import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import UploadImage from './UploadImage';
import UserName from './UserName';
import UniversalButton from '../UniversalButton';
const Dwidth = Dimensions.get('window').width;

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        padding: 30,
      }}>
      <UploadImage
        ShadowRadius={2}
        ShadowOpacity={2}
        BorderRadius={75}
        BackgroundColor={'#e0dedf'}
        Width={150}
        Height={150}
        AlignItems={'center'}
        IconTintColor={'grey'}
        JustifyContent={'center'}
        IconPosition={'center'}
        IconHeight={50}
        IconWidth={50}
        AlignSelf={'center'}
      />
      <UserName
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
        PlaceHolderText={'enter email'}
        PlaceHolderTextColor={'grey'}
        InputBorderRadius={30}
        ShadowColor={'grey'}
        AlignItems={'center'}
        FlexDirection={'row'}
        ShadowOpacity={2}
        BackgroundColor={'#e0dedf'}
      />
      <UserName
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
        PlaceHolderText={'enter password'}
        PlaceHolderTextColor={'grey'}
        InputBorderRadius={30}
        ShadowColor={'grey'}
        AlignItems={'center'}
        FlexDirection={'row'}
        ShadowOpacity={2}
        BackgroundColor={'#e0dedf'}
      />
      <UniversalButton
        Width={Dwidth - 30}
        Height={50}
        Self={'center'}
        TextSize={14}
        ButtonTextColor={'#000'}
        BorderRadius={0}
        yAxisPadding={0}
        xAxisPadding={0}
        yAxisMargin={15}
        ButtonText={'Login'}
        TextWeight={'600'}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
