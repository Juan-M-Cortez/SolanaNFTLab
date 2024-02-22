import * as React from 'react';
import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import darkTheme from './src/styles/themes/darkTheme';
import defaultTheme from './src/styles/themes/defaultTheme';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={darkTheme}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



