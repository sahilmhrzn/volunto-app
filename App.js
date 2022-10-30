//import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen'
import CreateEvent from './screens/CreateEvent'
import MyEvents from './screens/MyEvents'
import Profile from './screens/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { TailwindProvider } from 'tailwindcss-react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {addEvent} from './screens/HomeScreen'
import Form from './screens/Form';


const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'LeaderBoard') {
          iconName = focused ? 'bar-chart' : 'bar-chart-outline';
        }
        else if (route.name === 'Create') {
          iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
        }
        else if (route.name === 'My Events') {
          iconName = focused ? 'md-today' : 'md-today-outline';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }


        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        backgroundColor: "black",


      },
      headerShown: false,
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',

    })}>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="LeaderBoard" component={Form} />
      <Tab.Screen name="Create"
       children={()=><CreateEvent addEvent={addEvent} /> }
       />
      <Tab.Screen name="My Events" component={MyEvents} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}


//const Drawer = createDrawerNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}