import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import darkTheme from '../styles/themes/darkTheme';

function SettingsScreen({ navigation }) {
  return (
    <View style={darkTheme.container}>
      <Text style={darkTheme.text}>Settings Screen⚙️</Text>
      <Button title="TOOGLE DRAWER" onPress={() => navigation.toggleDrawer() } />
    </View>
  );
}

export default SettingsScreen;
  