import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as Pages from '../pages';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Pages.HomePage} />
        <Stack.Screen name="Result" component={Pages.ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
