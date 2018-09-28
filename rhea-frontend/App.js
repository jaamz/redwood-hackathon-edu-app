import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Create from './components/create';
import Profile from './components/profile';
import Details from './components/details';
import MainPage from './components/MainPage';
import Details from './components/details';

import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator } from 'react-navigation';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

// Tab navigator at bottom of page to route to different parts of app
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: createStackNavigator(
      {
        home: MainPage,
        detail: Details
      },
      {
        initialRouteName: 'home'
      }
    ),
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

const App = () =>( 
  <Provider store={store}>
      <View
        style={{ flex: 1 }}>
        {/* <Header /> */}
        <TabNavigator />
      </View>
  </Provider>
)
export default App;