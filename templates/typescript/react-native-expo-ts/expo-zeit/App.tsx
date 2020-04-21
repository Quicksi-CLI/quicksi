import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const App = () => {
  const [message, setMessage] = useState('Loading');

  (async () => {
    try {
      const { data } = await axios.get(API_URL + '/');
      setMessage(data);
    } catch (error) {
      setMessage('Api not workign.');
    }
  })();

  return (
    <View style={styles.container}>
      <Text>Quicksi starter</Text>
      <Text>Great to be on your device</Text>

      <Text
        style={{
          backgroundColor: 'aliceblue',
          padding: 14,
          margin: 24,
          borderRadius: 6,
        }}>
        {message}
      </Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
