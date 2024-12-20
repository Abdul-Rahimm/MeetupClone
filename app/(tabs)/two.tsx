import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  const stringsArray = ['zpple', 'banana', 'cherry', 'date', 'elderberry'];
  const nums = [1, 2, 3, 4, 67, 5, 4, 3, 2, 1];
  const obj = [
    { name: 'rahim', age: 100 },
    { name: 'ahim2', age: 20 },
    { name: 'bazzz', age: 20 },
  ];

  return (
    <>
      <Stack.Screen options={{ title: 'Learning' }} />
      <View>
        {obj
          .sort((a, b) => a.name.localeCompare(b.name))
          .sort((b, a) => a.age - b.age)
          .map((item) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
            </View>
          ))}
      </View>
    </>
  );
}
