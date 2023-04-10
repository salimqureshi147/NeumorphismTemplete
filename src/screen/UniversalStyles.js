import {View, Text, Dimensions, FlatList, Image} from 'react-native';
import React from 'react';
import {Data} from '../data/Data';
import {Neomorph} from 'react-native-neomorph-shadows';
import SquareIconField from '../components/SquareIconField';
import Threeway from '../components/Threeway';
import Banner from '../components/Banner';
const Width = Dimensions.get('window').width;
const UniversalStyles = () => {
  const category = ({item}) => {
    return (
      <View
        style={{
          height: 100,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Neomorph
          // inner // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          darkShadowColor="grey"
          lightShadowColor="#fff"
          style={{
            shadowRadius: 2,
            shadowOpacity: 2,
            borderRadius: 40,
            backgroundColor: '#e0dedf',
            width: 65,
            height: 65,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Image
            source={item.img}
            style={{
              height: 30,
              width: 30,
              alignSelf: 'center',
              tintColor: 'grey',
            }}
            resizeMode={'contain'}
          />
        </Neomorph>
        <Text style={{color: 'grey'}}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#e0dedf', paddingVertical: 15}}>
      <View style={{padding: 2}}>
        <FlatList
          renderItem={category}
          horizontal
          data={Data}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* <Insertbanner /> */}
      <Banner
        Height={150}
        Width={Width - 20}
        AlignItems={'center'}
        JustifyContent={'center'}
        AlignSelf={'center'}
        Margin={10}
        ShadowRadius={2}
        ShadowOpacity={2}
        BorderRadius={10}
        Padding={10}
        BackgroundColor={'#e0dedf'}
      />
      <SquareIconField
        Height={60}
        Width={'100%'}
        FieldWidth={'60%'}
        AlignSelf={'center'}
        PlaceHolderText={'Search...'}
        TextSize={14}
        PlaceHolderTextColor={'gray'}
        InputTextColor={'#000'}
        IconTintColor={'gray'}
        RightIcon={require('../assets/search.png')}
        yAxisPadding={0}
      />
      <Threeway
        HeightSize={60}
        WidthSize={'100%'}
        Self={'center'}
        PlaceHolderText={'Search...'}
        TextSize={14}
        PlaceHolderTextColor={'gray'}
        InputTextColor={'#000'}
        LeftImageTintcolor={'gray'}
        RightImageTintColor={'gray'}
        yAxisPadding={0}
      />
    </View>
  );
};

export default UniversalStyles;
