import { Text, View } from 'react-native';
import "./global.css";

export default function MedicineApp (){
  return(
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl font-bold text-white">
        If you see a red screen, NativeWind works ✅
      </Text>
    </View>
  )
}