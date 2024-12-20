import { Stack } from 'expo-router';
import React from 'react';
import EventCard from '~/components/EventCard';
import events from '../../assets/events.json';
import { Text } from 'react-native';
import { FlatList } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <FlatList data={events} renderItem={({ item }) => <EventCard data={item} />} className="" />
    </>
  );
}
