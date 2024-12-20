import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import events from '../assets/events.json';
import EventCard from '~/components/EventCard';

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const eventNumber = parseInt(id);
  const event = events[eventNumber - 1];

  return <EventCard data={event} />;
}
