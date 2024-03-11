import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Notification({setModalVisible}) {
  return (
    <View>
      <View className='bg-[#343a4080] w-full h-full'>
          <View className='w-80 h-full bg-white absolute right-0'>
            <View className='p-[10px]'>
              <Text className='text-primary font-medium top-[50px]'>Announcements</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} className='w-[32px] h-[32px] rounded-full absolute right-[10px] top-[50px] justify-center items-center bg-[#F8F9FA]'>
                <FontAwesome name="close" size={22} color="#343A40" />
              </TouchableOpacity>

              <View className='mt-5 top-[50px]'>
                <TouchableOpacity className='mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]'>
                  <View className='flex-row gap-[7px] items-center'>
                  <Ionicons name="mail" size={24} color="#343A40" />
                  <View>
                    <Text className='text-primary text-[13px]'>New Update Is Available</Text>
                    <Text className='text-secondary text-[11px] mt-[3px]'>V.2.1.1</Text>
                  </View>
                  </View>
                  <Feather name="chevron-right" size={24} color="#343A40" />
                </TouchableOpacity>

                <TouchableOpacity className='mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]'>
                  <View className='flex-row gap-[7px] items-center'>
                  <Ionicons name="mail" size={24} color="#343A40" />
                  <View>
                    <Text className='text-primary text-[13px]'>New Update Is Available</Text>
                    <Text className='text-secondary text-[11px] mt-[3px]'>V.2.1.1</Text>
                  </View>
                  </View>
                  <Feather name="chevron-right" size={24} color="#343A40" />
                </TouchableOpacity>

                <TouchableOpacity className='mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]'>
                  <View className='flex-row gap-[7px] items-center'>
                  <Ionicons name="mail" size={24} color="#343A40" />
                  <View>
                    <Text className='text-primary text-[13px]'>New Update Is Available</Text>
                    <Text className='text-secondary text-[11px] mt-[3px]'>V.2.1.1</Text>
                  </View>
                  </View>
                  <Feather name="chevron-right" size={24} color="#343A40" />
                </TouchableOpacity>

                <TouchableOpacity className='mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]'>
                  <View className='flex-row gap-[7px] items-center'>
                  <Ionicons name="mail" size={24} color="#343A40" />
                  <View>
                    <Text className='text-primary text-[13px]'>New Update Is Available</Text>
                    <Text className='text-secondary text-[11px] mt-[3px]'>V.2.1.1</Text>
                  </View>
                  </View>
                  <Feather name="chevron-right" size={24} color="#343A40" />
                </TouchableOpacity>

                <TouchableOpacity className='mt-[10px] bg-[#F8F9FA] flex-row justify-between items-center p-[10px]'>
                  <View className='flex-row gap-[7px] items-center'>
                  <Ionicons name="mail" size={24} color="#343A40" />
                  <View>
                    <Text className='text-primary text-[13px]'>New Update Is Available</Text>
                    <Text className='text-secondary text-[11px] mt-[3px]'>V.2.1.1</Text>
                  </View>
                  </View>
                  <Feather name="chevron-right" size={24} color="#343A40" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
    </View>
  )
}