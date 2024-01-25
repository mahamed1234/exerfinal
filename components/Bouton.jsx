import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const Bouton = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.btn}>
        <Text style={styles.txtBtn}>Clic ici</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  txtBtn: {
    color: "#ffffff",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#aa0aaf",
    width: 250,
  },
});

export default Bouton;