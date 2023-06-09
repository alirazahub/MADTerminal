import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import StackNav from '../../screens/stack/StackNav';

const Tab = createBottomTabNavigator();

function BottomNavbar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'HomeScreen') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Drawer') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="HomeScreen" component={StackNav} options={
                        {
                            headerShown: false
                        }
                    } />
                <Tab.Screen name="Drawer" component={DrawerMenu}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomNavbar;