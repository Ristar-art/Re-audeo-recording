import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Record from '../Record/record';
import Recordings from '../Record/recording';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>       
        <Stack.Screen name="Record" component={Record}/>
        <Stack.Screen name="Recordings" component={Recordings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
