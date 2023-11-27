// LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleForgotPassword = () => {
    navigation.navigate('AccountRecovery');
  };

  const handleLogin = () => {
    // Perform login authentication, if successful navigate to Home
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      {/* Add your login form components here */}
      <Button title="Forgot Password" onPress={handleForgotPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
