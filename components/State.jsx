import { View, Text, StyleSheet } from "react-native";
import { React, useState } from "react";
import { Button } from "react-native-paper";

const State = () => {
  const [bool, setBool] = useState(true);

  const handleSetBool = () => {
    setBool(!bool);
  };

  return (
    <View style={styles.container}>
      <Button style={styles.btn} onPress={handleSetBool}>
        <Text style={styles.txtBtn}>Changer le State : {bool ? "True" : "False"}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  txt: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  txtBool: {
    color: "red",
    fontWeight: "bold",
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

export default State;