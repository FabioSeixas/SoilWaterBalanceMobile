import React from 'react';
import { Text, View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
