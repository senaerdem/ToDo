import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Input({ title, icon, isSecure = false, secureIcon = { notVisible: null, visible: null } }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
    {
      isSecure ?
      <View className='w-full h-12 rounded-[6px] border-[1px] border-border bg-white'>
      <View className='absolute left-[10] top-[12px]'>{icon}</View>
      <TextInput className='h-full px-[37px] text-[15px]'
       secureTextEntry={isVisible}
       placeholder={title}
      />
      <Text className='text-[13px] text-primary absolute -top-[8px] left-[10px] bg-white px-[10px]'>{title}</Text>
      <TouchableOpacity className='absolute right-[10] top-[12px]' onPress={handleChangeVisible}>
        {
          isVisible
            ?
            secureIcon.notVisible
            :
            secureIcon.visible
        }
      </TouchableOpacity>
    </View>
    :
    <View className='w-full h-12 rounded-[6px] border-[1px] border-border bg-white'>
      <View className='absolute left-[10] top-[12px]'>{icon}</View>
      <TextInput className='h-full px-[37px] text-[15px]'
       placeholder={title}
      />
      <Text className='text-[13px] text-primary absolute -top-[8px] left-[10px] bg-white px-[10px]'>{title}</Text>
    </View>
    }
    </>
  )

}