import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f8f7f7' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
};

export default Routes;
