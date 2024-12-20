import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <View>
        <Text>Hello</Text>
      </View>
    </>
  );
}
