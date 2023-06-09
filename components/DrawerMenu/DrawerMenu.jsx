import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';
import TestScreen from '../../screens/TestScreen';
import Os from '../../screens/Os';


const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (


    <Drawer.Navigator>
      <Drawer.Screen name="Add Data" component={TestScreen} />
      <Drawer.Screen name="Check OS" component={Os} />
    </Drawer.Navigator>

  )
}



export default DrawerMenu

const styles = StyleSheet.create({

})