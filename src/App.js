import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import HomeScreen from './screens/Home';
import Buy from './screens/Buy';
import EquationTwo from './screens/EquationTwo';
import EquationThree from './screens/EquationThree';
import EquationOne from './screens/EquationOne';

import {store, persistor} from './redux/store';
import {LogBox} from 'react-native';

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="BUY"
              component={Buy}
              options={{title: 'BUY TURNS'}}
            />
            <Stack.Screen
              name="EquationTwo"
              component={EquationTwo}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EquationThree"
              component={EquationThree}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EquationOne"
              component={EquationOne}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}