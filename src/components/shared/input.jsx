import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Input({ title }) {
  return (
    <View className='w-full h-12 rounded-[6px] border-[1px] border-border bg-white'>
      <View className='absolute left-[10] top-[12px]'><Ionicons name="mail-outline" size={20} color="#868E96" /></View>
      <TextInput className='h-full px-[37px] text-[15px]'
       placeholder={title}
      />
      <Text className='text-[13px] text-primary absolute -top-[8px] left-[10px] bg-white px-[10px]'>{title}</Text>
    </View>
  )
}