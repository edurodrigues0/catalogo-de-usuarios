import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Head () {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}> Catalogo de usuarios </Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#6095c4",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  containerText: {
    fontSize: 22,
    color: "#666",
    fontWeight: "bold"
  }
})