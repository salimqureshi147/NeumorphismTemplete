import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {button, fieldText, headingText, textInput} from '../../utils/styles';
import PasswordInput from './PasswordInput';
import EmailInput from './EmailInput';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const SimpleLogin = () => {
  return (
    <View style={{height: Height, width: Width, justifyContent: 'center'}}>
      <Text style={headingText}>Login</Text>
      <Text style={fieldText}>User Name</Text>
      <EmailInput />
      <Text style={[fieldText, {marginVertical: 10}]}>Password</Text>
      <PasswordInput />
      <TouchableOpacity
        style={styles.forgot_password}
        onPress={() => navigation.navigate('Reset')}>
        <Text
          style={{
            fontWeight: '500',
            color: 'black',
            fontSize: 12,
          }}>
          Forgot password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} onPress={() => Check()}>
        <Text style={{color: 'white', fontWeight: '600'}}> Login </Text>
      </TouchableOpacity>
      <View
        style={{
          height: '20%',
          width: '60%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/facebooklogin.png')}
            style={{
              height: 50,
              width: '100%',
              alignSelf: 'center',
              marginTop: 25,
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/gmail.png')}
            style={{
              height: 50,
              width: '100%',
              marginTop: 5,
              alignSelf: 'center',
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SimpleLogin;

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
  forgot_password: {
    width: '90%',
    alignItems: 'flex-end',
    margin: 10,
  },
});
