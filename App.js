/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from './src/screen/Home';
import Meeting from './src/screen/Meeting';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Home') {
              iconName = 'calendar';
            } else if (rn === '') {
              iconName = 'search';
            } else if (rn === 'Meeting') {
              iconName = 'plus';
            } else if (rn === 'Notiication') {
              iconName = 'bell';
            } else {
              iconName = 'user';
            }
            return <Icon name={iconName} size={26} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'tomato',
          style: {padding: 60, height: 70},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={() => ({headerShown: false})}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          options={() => ({headerShown: false})}
        />
        <Tab.Screen
          name="Meeting"
          component={Meeting}
          options={({navigation}) => ({
            headerTitle: 'New Meeting/appoinment',
            headerTintColor: 'black',
            headerStyle: {backgroundColor: 'white'},
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Text style={{marginLeft: 20}}>
                  <Icon name={'close'} size={20} color={'black'} />
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Notiication"
          component={Home}
          options={() => ({headerShown: false})}
        />
        <Tab.Screen
          name="Account"
          component={Home}
          options={() => ({headerShown: false})}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
