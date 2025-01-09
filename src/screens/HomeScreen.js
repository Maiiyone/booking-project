import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../components/Header';
import Colors from '../utils/shared/Colors';
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Booking.com',
      headerShown: true,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: Colors.primary,
        height: 110,
        borderBottomColor: 'transparent'
      },
      headerRight: () => (
        <Ionicons name="notifications-outline" size={24} color="white" style={{
          marginRight: 12
        }} />
      )
    })


  }, [])
  return (
    <View>
      <Header />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})