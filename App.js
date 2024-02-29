import * as React from 'react';
import 'react-native-gesture-handler';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { darkTheme } from './src/styles/themes/darkTheme';
import defaultTheme from './src/styles/themes/defaultTheme';
import { Ionicons } from '@expo/vector-icons';

const darkDrawerTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    //primary: 'rgb(38, 38, 38)',
    card: 'rgb(36, 37, 38)',
    text: 'rgb(227, 227, 227)',
    Notification: 'rgb(227, 227, 227)',
  }
}

const Drawer = createDrawerNavigator();

export default function App() {

  const toggleTheme = (toggleTheme) => {
    return toggleTheme ? darkTheme : defaultTheme;

  }
  return (
    <NavigationContainer theme={darkDrawerTheme}>
      <Drawer.Navigator>
        <Drawer.Screen name="T Home" component={HomeScreen} options={homeIcon} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={settingsIcon} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const homeIcon = {
  title: 'Home',
  drawerIcon: ({ focused, size }) => (
    <Ionicons
      name="home-outline"
      size={16}
      color={focused ? '#0d7ae9' : '#e3e3e3'}
    />
  )
}

const settingsIcon = {
  title: 'Settings',
  drawerIcon: ({ focused, size }) => (
    <Ionicons
      name="settings-outline"
      size={16}
      color={focused ? '#0d7ae9' : '#e3e3e3'}
    />
  )
}




