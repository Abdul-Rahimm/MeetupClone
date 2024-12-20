import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function EventCard({ data }) {
  return (
    <>
      <View className="mb-2 p-3">
        <View className="flex-row gap-2">
          <View className="flex-1 gap-0.5">
            <Text className="font-semibold uppercase text-gray-500">{data.datetime}</Text>
            <Text className="text-lg font-bold">{data.title}</Text>
            <Text className="text-gray-500">{data.description}</Text>
          </View>
          <Image source={{ uri: data.image }} className="aspect-video w-2/5 rounded-lg" />
        </View>
      </View>
      <View className="flex-row gap-3 px-2">
        <Text className="mr-auto"> 13 going</Text>
        <Feather name="share" size={20} color="gray" />
        <Feather name="bookmark" size={20} color="gray" />
      </View>
    </>
  );
}
