import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';

export default function App() {
  const value = 2 + 2;
  useEffect(() => {
    if (value < 33) {
      console.log('Kam Hoiche');
    }
  }, [value]);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
