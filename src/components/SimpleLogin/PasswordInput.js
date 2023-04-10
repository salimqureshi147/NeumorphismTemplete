import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const PasswordInput = () => {
  return (
    <View style={styles.password_view}>
      <TextInput
        style={{width: '90%', height: '100%'}}
        placeholder={'• • • • • • • • •'}
      />
      <TouchableOpacity
        style={{
          height: 20,
          width: 20,
        }}>
        <Image
          style={{
            height: 20,
            width: 20,
          }}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  password_view: {
    height: 50,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#DEDEDE',
  },
});
