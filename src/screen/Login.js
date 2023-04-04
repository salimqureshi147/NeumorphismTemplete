import {View, Text, Dimensions, FlatList, Image} from 'react-native';
import React from 'react';
import {Data} from '../data/Data';
import {Neomorph} from 'react-native-neomorph-shadows';
import SquareIconField from '../components/SquareIconField';
import Banner from '../components/Banner';
import Threedots from '../components/Threedots';
const Width = Dimensions.get('window').width;
const Login = () => {
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
          inner // <- enable shadow inside of neomorph
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
              height: 50,
              width: 50,
              borderRadius: 25,
              alignSelf: 'center',
            }}
            resizeMode={'contain'}
          />
        </Neomorph>
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#e0dedf'}}>
      <View style={{}}>
        <FlatList
          renderItem={category}
          horizontal
          data={Data}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Banner />
      <SquareIconField
        HeightSize={60}
        WidthSize={'100%'}
        Self={'center'}
        PlaceHolderText={'Search...'}
        TextSize={14}
        PlaceHolderTextColor={'gray'}
        InputTextColor={'#000'}
        LeftImageTintcolor={'gray'}
        RightImageTintColor={'gray'}
        RightImage={require('../assets/search.png')}
        yAxisPadding={0}
      />
      <View
        style={{
          height: 100,
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Neomorph
          inner // <- enable shadow inside of neomorph
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
            source={{
              uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-laptop-project-planing-flatart-icons-outline-flatarticons.png',
            }}
            style={{
              height: 30,
              width: 30,
              borderRadius: 25,
              alignSelf: 'center',
              tintColor: 'grey',
            }}
            resizeMode={'contain'}
          />
        </Neomorph>
        <Text>Laptop</Text>
        <Threedots />
      </View>
      <Banner />
    </View>
  );
};

export default Login;
