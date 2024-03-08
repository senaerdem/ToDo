import { Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Profile, AddTaskScreen, CompletedScreen, TaskScreen } from '../screen';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel: ({ focused }) => (
            focused
            ?
            <Text className='text-[11px] text-main font-medium'>Home</Text>
            :
            <Text className='text-[11px] text-secondary'>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused
            ?
            <Entypo name="home" size={24} color="#9775fa" />
            :
            <Entypo name="home" size={24} color="#343A40" />
          ),
        }}
        />

        <Tab.Screen name="Task" component={TaskScreen} 
        options={{
          tabBarLabel: ({ focused }) => (
            focused
            ?
            <Text className='text-[11px] text-main font-medium'>Task</Text>
            :
            <Text className='text-[11px] text-secondary'>Task</Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused
            ?
            <FontAwesome5 name="clipboard-list" size={24} color="#9775fa" />
            :
            <FontAwesome5 name="clipboard-list" size={24} color="#343A40" />
          ),
        }}
        />

        <Tab.Screen name="AddTask" component={AddTaskScreen} 
        options={{
          tabBarLabel: ({ focused }) => (
            focused
            ?
            <Text className='text-[11px] text-main font-medium'>Add Task</Text>
            :
            <Text className='text-[11px] text-secondary'>Add Task</Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused
            ?
            <Entypo name="squared-plus" size={24} color="#9775fa" />
            :
            <Entypo name="squared-plus" size={24} color="#343A40" />
          ),
        }}
        />

        <Tab.Screen name="Completed" component={CompletedScreen} 
        options={{
          tabBarLabel: ({ focused }) => (
            focused
            ?
            <Text className='text-[11px] text-main font-medium'>Completed</Text>
            :
            <Text className='text-[11px] text-secondary'>Completed</Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused
            ?
            <FontAwesome6 name="list-check" size={24} color="#9775fa" />
            :
            <FontAwesome6 name="list-check" size={24} color="#343A40" />
          ),
        }}
        />

        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: ({ focused }) => (
            focused
            ?
            <Text className='text-[11px] text-main font-medium'>Profile</Text>
            :
            <Text className='text-[11px] text-secondary'>Profile</Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused
            ?
            <Ionicons name="person" size={24} color="#9775fa" />
            :
            <Ionicons name="person" size={24} color="#343A40" />
          ),
        }}
        />

        </Tab.Navigator>
    </NavigationContainer>
  )
}
