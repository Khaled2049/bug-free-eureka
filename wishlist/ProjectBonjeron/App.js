import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import WishList from './screens/WishList';
import Home from './screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="WishList"
          component={WishList}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
