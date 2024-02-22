import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen🏡</Text>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, // Corrected from "flix" to "flex"
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold", // Corrected from "frontWeight" to "fontWeight"
        marginBottom: 16,
    },
});