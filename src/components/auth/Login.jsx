import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Input from '../shared/input'
import Button from '../shared/Button'
import { loginForm  } from '../../utils/const/authForm'

export default function Login({navigation}) {
  return (
    <View className='bg-white flex-1 items-center justify-center px-5'>
        
        <View>
        <Image
        source={require('../../../assets/images/auth-logo.png')}
        />
        </View>

      <View className='w-full'>
      <FlatList
        data={loginForm}
        renderItem={({ item }) => (
          <View className='mt-5 w-full'>
            <Input title={item.title} icon={item.icon} isSecure={item.isSecure} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
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
