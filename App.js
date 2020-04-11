import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TimerMenu from './components/TimerMenu'
import AboutScreen from './components/AboutScreen'
import IntroScreen from './components/IntroScreen'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"IntroScreen"} headerMode={'none'}>
        <Stack.Screen name="Home" component={TimerMenu} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
