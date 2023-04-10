import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {textInput} from '../../utils/styles';

const EmailInput = () => {
  return (
    <View>
      <TextInput style={textInput} placeholder={'example@email.com'} />
    </View>
  );
};

export default EmailInput;

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
