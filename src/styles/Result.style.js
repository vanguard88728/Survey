import {StyleSheet} from 'react-native';
import CommonStyle from './common.style';

export default StyleSheet.create({
  button: {
    ...CommonStyle.buttonContainer,
    backgroundColor: 'cornflowerblue',
  },
  infoText: {
    marginVertical: 6,
  },
});
