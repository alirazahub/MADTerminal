import React,{BackHandler } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import Details from '../Details';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={Details} 
      options={
        {
            headerLeft: () => (
                <Button title="Back" onPress={() => BackHandler.exitApp()} />
              ),
        }
      }
      />
    </Stack.Navigator>
  )
}