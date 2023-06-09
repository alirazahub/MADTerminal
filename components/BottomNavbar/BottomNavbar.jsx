import React from 'react';
import { NavigationContainer,useFocusEffect  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { updateCurrentScreen } from '../utilities/updateCurrentScreen.js'
import Os from '../../screens/Os';
import TestScreen from '../../screens/TestScreen';
import ChangeTheme from '../../screens/ChangeTheme';

const Tab = createBottomTabNavigator();

function BottomNavbar() {
    

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home Screen') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Operating System') {
                            iconName = focused ? 'cog' : 'cog-outline';
                        } else if (route.name === 'Add Products') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                        }else if (route.name === 'Change Theme') {
                            iconName = focused ? 'sunny' : 'sunny-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                    
                })}
            >
                <Tab.Screen name="Home Screen" component={HomeScreen} />
                <Tab.Screen name="Operating System" component={Os} />
                <Tab.Screen name="Add Products" component={TestScreen} />
                <Tab.Screen name="Change Theme" component={ChangeTheme} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomNavbar;