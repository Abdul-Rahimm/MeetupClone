import { useLocalSearchParams } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import events from '../assets/events.json';
import EventCard from '~/components/EventCard';

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const eventNumber = parseInt(id);
  const event = events[eventNumber - 1];

  return (
    <>
      <EventCard data={event} />;{/* Footer */}
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between border-t-2 border-gray-300 p-5 pb-10">
        <Text className="text-xl font-semibold">Free</Text>

        <Pressable className="rounded-md bg-red-500 p-5 px-8">
          <Text className="text-lg font-bold text-white">Join and RSVP</Text>
        </Pressable>
      </View>
    </>
  );
}
