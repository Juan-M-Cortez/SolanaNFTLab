import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import darkTheme from '../styles/themes/darkTheme';

function HomeScreen({ navigation }) {
  return (
    <View style={darkTheme.container}>
      <Text style={darkTheme.text}>Home Screen🏡</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

export default HomeScreen;