import React from 'react';
import {View, StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigator';
import CommonStyle from './styles/common.style';

export default function App() {
  return (
    <View style={CommonStyle.container}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </View>
  );
}
