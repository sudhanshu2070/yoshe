import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NoteScreen from '../screens/NoteScreen';

// Define navigation parameters for each screen
export type RootStackParamList = {
    Home: undefined;
    Note: { id: string }; // 'Note' screen expects an 'id' parameter
  };
  
const Stack = createStackNavigator<RootStackParamList>();
  
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;