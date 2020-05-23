import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import Detail from './screens/detail';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
const HomeStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={Home} />
          <HomeStack.Screen name="Detail" component={Detail} />
        </HomeStack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
