import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("ConnexionPage");
      };

  return (
    <View>
      <Text>Bienvenu !</Text>
    
      <Button style={styles.btn} onPress={handleLogin}>
        <Text style={styles.txtBtn}>Connexion</Text>
      </Button>
    </View>
  )

  
}
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    txtBtn: {
      color: "#ffffff",
    },
    btn: {
      marginTop: 10,
      backgroundColor: "#7F00FF",
      width: 250,
    },
  });

export default Dashboard