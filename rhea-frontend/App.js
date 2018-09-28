import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Create from './components/create';
import Profile from './components/profile'
// import Graph from './components/graph'
import MainPage from './components/MainPage';
// import Transaction from './components/transaction';

// Tab navigator at bottom of page to route to different parts of app
const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: MainPage,
    Create: Create,
    Profile: Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Dashboard') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } 
        else if (routeName === 'Create') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2eeadb',
      inactiveTintColor: 'gray',
    },
  });


const App = () => <View
                    style={{ flex: 1 }}>
                    {/* <Header /> */}
                    <TabNavigator />
                  </View>

export default App;