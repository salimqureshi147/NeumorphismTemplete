import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import Banner from './Banner';
const Dwidth = Dimensions.get('window').width;

const Insertbanner = () => {
  return (
    <View style={{alignItems: 'center', marginVertical: 20}}>
      <Neomorph
        swapShadows
        darkShadowColor="grey"
        lightShadowColor="#fff"
        // inner
        // <-- This is important for the shadow to be inside the button
        style={{
          borderRadius: 15,
          width: Dwidth - 10,
          height: 200,
          shadowRadius: 2,
          shadowOpacity: 2,
          paddingHorizontal: 20,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#e0dedf',
        }}>
        <Neomorph
          swapShadows
          darkShadowColor="grey"
          lightShadowColor="#fff"
          inner
          // <-- This is important for the shadow to be inside the button
          style={{
            borderRadius: 15,
            width: Dwidth - 20,
            height: 190,
            shadowRadius: 2,
            shadowOpacity: 2,
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e0dedf',
          }}>
          <Banner />
        </Neomorph>
      </Neomorph>
    </View>
  );
};

export default Insertbanner;

const styles = StyleSheet.create({});
