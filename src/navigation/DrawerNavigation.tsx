import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        drawerLabelStyle: {
          backgroundColor: 'blue',
        },
        overlayColor: 'black',
        drawerStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
