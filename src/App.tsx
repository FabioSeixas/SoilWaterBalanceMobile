import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { StatusBar, View } from 'react-native';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f7f7" />
      <AppProvider>
        <View style={{ backgroundColor: '#f8f7f7', flex: 1 }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
