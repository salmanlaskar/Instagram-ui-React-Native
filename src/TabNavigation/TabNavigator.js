import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPost from './../screens/AddPost';
import Feed from './../screens/Feed';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Feed} />
        <Tab.Screen name="Add" component={AddPost} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}