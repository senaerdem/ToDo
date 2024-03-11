import { Text, TouchableOpacity, ScrollView, View } from 'react-native'
import React from 'react'
import CompletedItem from './CompletedItem'

export default function Completed() {
  return (
    <View className='mt-5 mx-[10px]'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-primary text-[16px] font-medium'>My Previous Lists</Text>
        <TouchableOpacity>
            <Text className='underline text-main text-[13px]'>Clean</Text>
        </TouchableOpacity>
            
      </View>
      <ScrollView className='mt-[10px]' horizontal={true} showsHorizontalScrollIndicator={false}>
        <CompletedItem />
        <CompletedItem />
        <CompletedItem />
        <CompletedItem />
      </ScrollView>
    </View>
  )
}