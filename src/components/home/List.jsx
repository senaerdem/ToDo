import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import Section from '../shared/Section';
import ListItem from '../shared/ListItem';
import Goal from './Goal';
import Modal from '../shared/Modal'

export default function List() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Section>
      <View className='flex-row justify-between'>
        <Text className='text-[16px] text-primary font-medium'>To Do List</Text>
        <TouchableOpacity className='flex-row gap-[7px] items-center'>
        <Entypo name="circle-with-plus" size={24} color="#9775fa" />
            <Text className='text-main text-[13px]'>Add Task</Text>
        </TouchableOpacity>
      </View>

      <View className='mt-[10px]'>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </View>
      <TouchableOpacity className='mt-[10px]'>
        <Text className='text-center text-secondary text-[11px] underline'>Your Target</Text>
      </TouchableOpacity>

      <Modal setModalVisible={setModalVisible} modalVisible={modalVisible} >
        <Goal setModalVisible={setModalVisible} />
      </Modal>
    </Section>
  )
}

const styles = StyleSheet.create({})