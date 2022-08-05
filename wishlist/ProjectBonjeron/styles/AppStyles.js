import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  backgroundCover: {
    padding: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    opacity: 0.8,
  },
  lightText: {
    color: '#fff',
  },
  header: {
    fontSize: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  lightTextInput: {
    borderBottomColor: '#FFFFFF',
  },
  inlineTextButton: {
    color: '#b2dbd8',
  },
  pressedinlineTextButton: {
    color: '#b2dbd8',
    opacity: 0.6,
  },
});
