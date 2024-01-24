import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CustomForm = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    console.log('Confirmation du mot de passe:', confirmPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nom"
        value={nom}
        onChangeText={text => setNom(text)}
        style={styles.input}
      />
      <TextInput
        label="Prénom"
        value={prenom}
        onChangeText={text => setPrenom(text)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Confirmation du mot de passe"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry
        style={styles.input}
      />
         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Faire du café ☕
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width:350,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default CustomForm;
