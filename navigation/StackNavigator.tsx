import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PaymentSuccess from '../screens/PaymentSuccess';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
