import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  pageContent: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  inputLabel: {
    color: '#3724bd',
    marginHorizontal: 5,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  inputText: {
    marginBottom: 10,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 18,
    elevation: 6,
    borderRadius: 5,
  },
  buttonContainer: {
    marginHorizontal: 5,
    marginTop: 20,
    borderRadius: 5,
    height: 50,
  },
  buttonText: {
    color: 'white',
    position: 'absolute',
    textAlignVertical: 'center',
    height: 50,
    alignSelf: 'center',
    fontSize: 16,
  },
  card: {
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    elevation: 6,
  },
});
