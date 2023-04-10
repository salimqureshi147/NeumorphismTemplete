import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';

const Threedots = () => {
  return (
    <View style={styles.MainView}>
      {/* Dot 1 */}
      <Neomorph
        swapShadows
        darkShadowColor="grey"
        lightShadowColor="#fff"
        style={styles.dots}
      />

      {/* Dot 2 */}
      <Neomorph
        darkShadowColor="grey"
        lightShadowColor="#fff"
        style={styles.dots}
      />

      {/* Dot 3 */}
      <Neomorph
        swapShadows
        darkShadowColor="grey"
        lightShadowColor="#fff"
        style={styles.dots}
      />
    </View>
  );
};

export default Threedots;

const styles = StyleSheet.create({
  MainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dots: {
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
  },
});
