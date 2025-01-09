import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HomeScreen from './src/screens/HomeScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProfileScreen from './src/screens/ProfileScreen';
import SavedScreen from './src/screens/SavedScreen';
import BookingScreen from './src/screens/BookingScreen';
import { NavigationContainer } from '@react-navigation/native';
const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const BottomTabs = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (<Entypo name="home" size={24} color="#003580" />) : (<AntDesign name="home" size={24} color="black" />)
                    }} />
                <Tab.Screen
                    name="Saved"
                    component={SavedScreen}
                    options={{
                        tabBarLabel: 'Saved',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (<AntDesign name="heart" size={24} color="#003580" />) : (<AntDesign name="hearto" size={24} color="black" />)
                    }} />
                <Tab.Screen
                    name="Bookings"
                    component={BookingScreen}
                    options={{
                        tabBarLabel: 'Bookings',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (<Ionicons name="notifications" size={24} color="#003580" />) : (<MaterialIcons name="notifications-none" size={24} color="black" />)
                    }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (<Ionicons name="person-circle-sharp" size={24} color="#003580" />) : (<Ionicons name="person-circle-outline" size={24} color="black" />)
                }} />

            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
      
    )
}

export default StackNavigator

const styles = StyleSheet.create({})