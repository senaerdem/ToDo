import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

export default function Header() {
  return (
    <View className='bg-white flex-row justify-between p-[10px] items-center'>
        <View className='flex-row gap-[7px] items-center'>
            <View>
                <Image 
                    className=''
                    source={require('../../../assets/images/user.jpg')}
                />
            </View>
            <View>
                <Text className='text-primary font-medium mb-[3px]'>Welcome Sena</Text>
                <Text className='text-secondary'>User</Text>
            </View>
        </View>
        <TouchableOpacity>
            <View className='relative w-[32px] h-[32px] justify-center items-center rounded-full'>
                <FontAwesome6 name="bell" size={24} color="#868E96" />
                <View className='absolute right-1 top-1 bg-[#ff3200] justify-center items-center rounded-full w-[13px] h-[13px]'>
                    <Text className='text-[10px] text-white'>1</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}

