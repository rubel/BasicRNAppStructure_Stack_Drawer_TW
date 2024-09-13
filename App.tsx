/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, NavigationContainer, useNavigation} from '@react-navigation/native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, Text} from 'react-native';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function StackNavigations() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return (
            <Pressable
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}>
              <Text>open</Text>
            </Pressable>
          );
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const DrawerNavigations = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Stack" component={StackNavigations} />
    </Drawer.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <DrawerNavigations />
    </NavigationContainer>
  );
}

export default App;
