import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import PremiumImageSvg from './PremiumImageSvg'

export default function PremiumBanner() {
  return (
    <View className='mt-5 bg-main rounded-[6px] mx-[10px] h-[125px] px-[10px] items-center flex-row justify-between'>
      <View>
        <View>
          <Text className='text-[15px] text-white font-medium mb-[3px]'>It's time to switch to premium!</Text>
          <Text className='text-[12px] text-white'>Highlight your recipes with premium</Text>
        </View>
        <TouchableOpacity className='mt-[10px] justify-center items-center w-11/12 bg-white h-[28px] rounded-[24px]'>
          <Text className='text-[14px] text-primary font-medium'>7 Days Free</Text>
        </TouchableOpacity>
      </View>
      <View className='mt-5'>
      <PremiumImageSvg />
      </View>
    </View>
  )
}
