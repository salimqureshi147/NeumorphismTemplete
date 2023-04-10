import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import Threedots from './Threedots';
import Banner from './Banner';
import {inner_View, outer_View} from '../styles';
const Dwidth = Dimensions.get('window').width;
const Width = Dimensions.get('window').width;

const Threeway = () => {
  return (
    <View style={{alignItems: 'center', marginVertical: 20}}>
      <Neomorph
        //  inner
        style={outer_View}
        swapShadows
        darkShadowColor="grey"
        lightShadowColor="#fff">
        <Neomorph
          inner
          style={inner_View}
          swapShadows
          darkShadowColor="grey"
          lightShadowColor="#fff">
          <View style={styles.banner_MainView2}>
            <Neomorph
              //   inner // <- enable shadow inside of neomorph
              swapShadows // <- change zIndex of each shadow color
              darkShadowColor="grey"
              lightShadowColor="#fff"
              style={styles.small_Icon}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-laptop-project-planing-flatart-icons-outline-flatarticons.png',
                }}
                style={{
                  height: 25,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: 'grey',
                }}
                resizeMode={'contain'}
              />
            </Neomorph>
            <Text style={{color: 'grey', fontWeight: '400'}}>Heading</Text>
            <Threedots />
          </View>
          {/* <Banner BWidth={Dwidth - 40} BMargin={0} /> */}
          <Banner
            Height={150}
            Width={Width - 40}
            AlignItems={'center'}
            JustifyContent={'center'}
            AlignSelf={'center'}
            BackgroundColor={'#e0dedf'}
            Margin={0}
            ShadowRadius={2}
            ShadowOpacity={2}
            BorderRadius={10}
            Padding={10}
          />
        </Neomorph>
      </Neomorph>
    </View>
  );
};

export default Threeway;

const styles = StyleSheet.create({
  small_Icon: {
    shadowRadius: 2,
    shadowOpacity: 2,
    borderRadius: 20,
    backgroundColor: '#e0dedf',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  banner_MainView2: {
    height: 100,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
