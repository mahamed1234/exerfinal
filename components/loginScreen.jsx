// LoginScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Logique de connexion ici
    // Vous pouvez vérifier les informations de connexion et rediriger vers le tableau de bord
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Formulaire de Connexion</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Connexion" onPress={handleLogin} style={styles.button} />
    </View>
  );
};

const styles = {
  input: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    marginTop: 20,
  },
};

export default LoginScreen;
