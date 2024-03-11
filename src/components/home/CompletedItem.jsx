import { Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function CompletedItem() {
  return (
    <View className='bg-lime-400 p-[10px] rounded-[6px] mr-3 w-[128px] h-[132px]'>
      <View className='flex-row justify-between items-center'>
        <View className='w-[35px] h-[35px] bg-white justify-center items-center rounded-[6px]'>
          <MaterialCommunityIcons name="run-fast" size={24} color="black" />
        </View>
        <FontAwesome name="long-arrow-right" size={24} color="black" />
      </View>

      <View className='mt-[45px]'>
        <Text className='text-white font-medium text-[16px]'>My Sports Day</Text>
        <Text className='text-white text-[12px]'>Monday, Mar 11</Text>
      </View>
    </View>
  )
}
