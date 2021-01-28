import {StyleSheet} from 'react-native';
import CommonStyle from './common.style';

export default StyleSheet.create({
  button: {
    ...CommonStyle.buttonContainer,
    backgroundColor: 'cornflowerblue',
  },
  dateContainer: {
    marginHorizontal: 5,
    height: 50,
    marginBottom: 15,
    backgroundColor: '#8cc43f',
    fontSize: 18,
    elevation: 6,
    borderRadius: 5,
  },
  dateText: {
    color: 'white',
    position: 'absolute',
    textAlignVertical: 'center',
    height: 50,
    fontSize: 16,
    marginHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkLabel: {
    color: '#3724bd',
    marginHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
