import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
// import Header from './components/header'
// import Graph from './components/graph'
import MainPage from './components/MainPage';
// import Transaction from './components/transaction';

// Tab navigator at bottom of page to route to different parts of app
const TabNavigator = createBottomTabNavigator(
  {
    Home: MainPage,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } 
        // else if (routeName === 'Graph') {
        //   iconName = `ios-trending-up${focused ? '' : '-outline'}`;
        // } else if (routeName === 'Log') {
        //   iconName = `ios-paper${focused ? '' : '-outline'}`;
        // }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  });


const App = () => <View
                    style={{ flex: 1 }}>
                    {/* <Header /> */}
                    <TabNavigator />
                  </View>

export default App;