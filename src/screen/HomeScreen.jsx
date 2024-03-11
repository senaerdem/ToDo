import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/Header'
import List from '../components/home/List';
import PremiumBanner from '../components/shared/PremiumBanner';
import Completed from '../components/home/Completed';

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <List />
        <PremiumBanner />
        <Completed />
      </ScrollView>
    </SafeAreaView>
  )
}