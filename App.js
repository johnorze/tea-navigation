import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TimerMenu from './screens/TimerMenu'
import AboutScreen from './screens/AboutScreen'
import IntroScreen from './screens/IntroScreen'
import Timer from './components/Timer'

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
        <Stack.Screen name="Home" component={TimerMenu} options={{animationEnabled: false}} />
        <Stack.Screen name="About" component={AboutScreen} options={{animationEnabled: false}} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{animationEnabled: false}} />
        <Stack.Screen name="Timer" component={Timer} options={{animationEnabled: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
