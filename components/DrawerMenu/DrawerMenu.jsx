import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import TestScreen from '../../screens/TestScreen';


const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (


    <Drawer.Navigator>
      <Drawer.Screen name="Drawer Screen 1" component={HomeScreen} />
      <Drawer.Screen name="Add Data" component={TestScreen} />
    </Drawer.Navigator>

  )
}



export default DrawerMenu

const styles = StyleSheet.create({

})