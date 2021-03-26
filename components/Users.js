import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Users (props) {
  return(
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.styleText}>Name: {props.name}</Text>
        <Text style={styles.styleText}>Age: {props.age}</Text>
        <Text style={styles.styleText}>Email: {props.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 3,
  },
  containerText: {
    flex: 1,
    justifyContent: "center",
    margin: 5,
  },
  styleText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#666",
  }
});