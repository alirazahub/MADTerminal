import { View, Text } from 'react-native'

export default function Details({ navigation, route }) {
    const { item } = route.params;
  return (
    <View>
      <Text>{item.price}</Text>
    </View>
  )
}