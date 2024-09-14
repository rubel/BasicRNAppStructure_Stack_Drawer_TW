import {  Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DrawerContent() {
  return (
    <SafeAreaView>
      <Text className='text-lg bg-pink-200'>DrawerContent</Text>
    </SafeAreaView>
  )
}