import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SettingsScreen() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Dashboard Screen</Text>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flix: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        frontWeight: "bold",
        marginBottom: 16,
    },

});
