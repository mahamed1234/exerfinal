import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ConnexionPage = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Dashboard");
  };

  const handleSub = () => {
    navigation.navigate("InscriptionPage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>welcome to our Site</Text>
      <TextInput style={styles.inputs} label="Email" placeholder="Email" />
      <TextInput
        style={styles.inputs}
        label="Mot de passe"
        placeholder="Mot de passe"
      />
      <Button style={styles.btn} onPress={handleLogin}>
        <Text style={styles.txtBtn}>Connexion</Text>
      </Button>
      <Button style={styles.btn} onPress={handleSub}>
        <Text style={styles.txtBtn}>Inscription</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: " #7F00FF",
    margin: 5,
    borderRadius: 25,
    padding: 20,

    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#7F00FF",
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#7F00FF",
    margin: 5,
  },
 
  
    TextInputinput: {
      marginBottom: 20,
    },
    button: {
      marginTop: 20,
    },
    txtBtn: {
        color: "#ffff",
        },
    btn: {
        marginTop: 5,
        backgroundColor: "#7F00FF",
        width: 250,
        alignSelf: "center",
        marginBottom: 10,
      },

});

export default ConnexionPage;