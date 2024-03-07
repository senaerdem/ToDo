import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Input from '../shared/input'
import Button from '../shared/Button'
import { loginForm  } from '../../utils/const/authForm'
import { setLoader } from '../../redux/generalSlice';
import { useDispatch } from 'react-redux';


export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const changePage = ()=> {
    dispatch(setLoader());
    navigation.navigate('Register');
  }
  return (
    <View className='bg-white flex-1 items-center justify-center px-5'>
        
        <View>
        <Image
        source={require('../../../assets/images/splash-image.png')}
        />
        </View>

      <View className='w-full'>
      <FlatList
        data={loginForm}
        renderItem={({ item }) => (
          <View className='mt-2 w-full'>
            <Input item={item} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      </View>

      <TouchableOpacity 
      className='w-full mt-2'
      onPress={changePage}>
        <Button title={'Log In'} />
      </TouchableOpacity>

      <View className='w-full mt-2 flex-row'>
        <Text className='text-primary'>Dont't you have an account yet?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
            <Text className='font-[600] ml-[7px] text-primary underline'>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
