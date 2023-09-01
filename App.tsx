import React from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/index';
import store from './src/store/index';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/theme/colors';

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.grayDark}
        barStyle="dark-content"
      />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
