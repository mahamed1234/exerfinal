import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const InscriptionPage = () => {
  const navigation = useNavigation();
  const handleSub = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.inputs}
        label="Prenom"
        placeholder="Your first name"
      />
      <TextInput
        style={styles.inputs}
        label="Nom"
        placeholder="Your last name"
      />
      <TextInput style={styles.inputs} label="Email" placeholder="Your email" />
      <TextInput
        style={styles.inputs}
        label="Mot de passe"
        placeholder="Your password"
      />
      <TextInput
        style={styles.inputs}
        label="Confirmer mot de passe"
        placeholder="Your confirm password"
      />
     <Button mode="contained" onPress={handleSub} style={styles.button}>
        Faire du café ☕
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        
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
 
  
    TextInputinput: {
      marginBottom: 20,
    },
    button: {
      marginTop: 20,
    },
  });
  

export default InscriptionPage;