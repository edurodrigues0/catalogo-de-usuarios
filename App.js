import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Head from './components/Head.js';
import Users from './components/Users.js';

export default function App() {
  const users = {
    '002': {
      name: 'Layla Eufrasio',
      age: 22,
      email: 'layla@eufrasio.com'
    },
    '003': {
      name: 'João de Deus',
      age: 12,
      email: 'João@Dee.com'
    },  
    '001': {
      name: 'Eduardo Rodrigues',
      age: 25,
      email: 'eduardo@rodrigues.com'
    },
    '004': {
      name: 'Maria Flor',
      age: 40,
      email: 'maria@flor.com'
    },
    '005': {
      name: 'Karine Souza',
      age: 18,
      email: 'karine@souza.com'
    },
  };

  var usersJsx = [];

  for (var id in users) {
    usersJsx.push(
      <Users
        name={users[id].name}
        age={users[id].age}
        email={users[id].email}
      />
    )
  }

  return (
    <>
      <Head />
      <View style={styles.container}>
        {usersJsx}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
