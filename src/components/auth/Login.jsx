import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../shared/input'
import Button from '../shared/Button'

export default function Login({navigation}) {
  return (
    <View className='bg-white flex-1 items-center justify-center px-5'>
        
        <View>
        <Image
        source={require('../../../assets/images/auth-logo.png')}
        />
        </View>

      <View className='mt-5 w-full'>
        <Input title={'E-mail Adress'} />
      </View>

      <View className='mt-5 w-full'>
        <Input title={'Password'} />
      </View>

      <View className='w-full mt-5'>
        <Button title={'Log In'} />
      </View>

      <View className='w-full mt-5 flex-row'>
        <Text className='text-primary'>Dont't you have an account yet?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
            <Text className='font-[600] ml-[7px] text-primary underline'>Sign Up!</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
