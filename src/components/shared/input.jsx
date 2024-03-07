import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUserValidationInput } from '../../redux/userSlice';

export default function Input({ item: { title, icon, isSecure = false, secureIcon, type } }) {

  const user = useSelector((state) => state.user);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const handleChangeVisible = () => {
    setIsVisible(!isVisible);
  }

  const changeFormInfo = (type, value) => {
    dispatch(setUserValidationInput(
      {
        type,
        value,
      }
    ));
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
       onChangeText={(value) => { changeFormInfo(type, value) }}
       value={user[type]}
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
       onChangeText={(value) => { changeFormInfo(type, value) }}
       value={user[type]}
      />
      <Text className='text-[13px] text-primary absolute -top-[8px] left-[10px] bg-white px-[10px]'>{title}</Text>
    </View>
    }
    </>
  )

}