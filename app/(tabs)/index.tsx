import { Text, View } from "react-native";
import {Link} from "expo-router"

import "@/global.css"
export default function index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-dark-200 font-bold">
        Movie App
      </Text>
      
    </View>
  );
}