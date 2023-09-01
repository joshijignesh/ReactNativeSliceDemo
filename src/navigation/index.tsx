import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {  useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Define your dashboard screens here
import LoginScreen from '../container/LoginScreen/index';
import HomeScreen from '../container/HomeScreen/index';
import FavoriteScreen from '../container/FavoriteScreen/index';
import { colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const option = {
  headerShown: false
}

/**
 * @function tabBarOption
 * @param name 
 * @returns tabBarOption set
 * 
 * This function is used to handle the bottomTab navigator options
 */
const tabBarOption = (name: string) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.prmiary,
  tabBarInactiveTintColor: colors.disabled,
  tabBarIcon: ({ focused }: {focused: boolean}) => <Icon name={name} size={24} color={focused ? colors.prmiary : colors.disabled} style={{padding:0, margin:0}} />
})

/**
 * @function DashboardTabs
 * @returns React Element View for showing tabs
 */
const DashboardTabs = () => (
  <Tab.Navigator >
    <Tab.Screen  name="Home" component={HomeScreen} options={tabBarOption('home')} />
    <Tab.Screen name="Favourite" component={FavoriteScreen}  options={tabBarOption('star-outline')}  />
  </Tab.Navigator>
);

/**
 * @returns Main App Navigator
 */
const AppNavigator = () => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen name="Dashboard" component={DashboardTabs} options={option} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={option} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
