import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../utils/shared/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Header = () => {
  return (
    <View style={{
      backgroundColor: Colors.primary,
      height: 65,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}>
      <Pressable style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 25,
        padding: 5
      }}>
        <Ionicons name="bed-outline" size={20} color="white" />
        <Text style={{
          marginLeft: 8,
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15
        }}>Stays</Text>
      </Pressable>
      <Pressable style={{
        flexDirection: 'row',
        alignItems: 'center',
     
      }}>
       <Ionicons name="airplane-outline" size={20} color="white" />
        <Text style={{
          marginLeft: 8,
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15
        }}>Flights</Text>
      </Pressable>
      <Pressable style={{
        flexDirection: 'row',
        alignItems: 'center',
     
      }}>
      <Ionicons name="car-outline" size={20} color="white" />
        <Text style={{
          marginLeft: 8,
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15
        }}>Car Rental</Text>
      </Pressable>
      <Pressable style={{
        flexDirection: 'row',
        alignItems: 'center',
      
      }}>
   <Ionicons name="car-sport-outline" size={20} color="white" />
        <Text style={{
          marginLeft: 8,
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15
        }}>Taxi</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})