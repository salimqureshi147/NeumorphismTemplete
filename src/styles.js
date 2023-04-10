import {Dimensions} from 'react-native';
const Width = Dimensions.get('window').width;

const banner = {
  shadowRadius: 2,
  shadowOpacity: 2,
  borderRadius: 10,
  padding: 10,
  backgroundColor: '#e0dedf',
  height: 150,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
};
const outer_View = {
  borderRadius: 15,
  width: Width - 10,
  height: 300,
  shadowRadius: 2,
  shadowOpacity: 2,
  paddingHorizontal: 20,
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: '#e0dedf',
};
const inner_View = {
  borderRadius: 15,
  width: Width - 20,
  height: 290,
  shadowRadius: 2,
  shadowOpacity: 2,
  paddingHorizontal: 20,
  alignItems: 'center',
  backgroundColor: '#e0dedf',
};
export {banner, outer_View, inner_View};
