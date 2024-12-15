import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NoteScreen from '../screens/NoteScreen';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Define navigation parameters for each screen
export type RootStackParamList = {
    Home: undefined;
    Note: { id: string }; // 'Note' screen expects an 'id' parameter
  };
  
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      {/* Custom StatusBar */}
      <StatusBar
        barStyle="light-content" // Makes status bar text/icons white
        backgroundColor="#444" // Matches header background
      />

      {/* Navigation Container */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: '#ffffff', // Back button and icons color
            headerBackground: () => <View style={styles.headerBackground} />,
            headerTitleAlign: 'left',
            headerLeftContainerStyle: {
              paddingLeft: 16,
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="Note" component={NoteScreen} options={{ title: 'Add Note' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 70,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  headerTitleStyle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 1.2,
    fontFamily: 'Arial', // Use any custom font here
  },
  headerBackground: {
    backgroundColor: '#444', // Dark background for the header
    height: '100%',
    width: '100%', // Ensure the header spans the full width
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default AppNavigator;