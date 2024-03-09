import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox'

export default function ListItem() {
  const [isChecked, setChecked] = useState(false);
  const handleCheckbox = () => setChecked(!isChecked)
  return (
    <TouchableOpacity onPress={handleCheckbox} className={`border-[2px] border-white ${isChecked && 'border-main'}  bg-white rounded-[6px] mt-[10px] px-[10px] py-[10px] flex-row justify-between items-center`}>
    <View className='flex-row gap-5 item-center'>
        <View>
          <MaterialCommunityIcons name="run" size={24} color="#4630EB" />
        </View>
        <View>
          <Text className='text-primary text-[13px]'>Morning exercise</Text>
          <Text className={`mt-[3px] text-secondary text-[11px] ${isChecked && 'line-through'}`}>Walking at 8am</Text>
        </View>
      </View>
        <View>
        <Checkbox
          className='rounded-[2px]'
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked && '#4630EB'}
        />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
