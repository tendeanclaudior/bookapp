import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BookList from "../BookList";
import { Gap } from "../../Components";

const Home = () => {
  return (
    <View style={styles.page}>
      <Gap height={30} width={0} />
      <Text style={styles.title}>Book List</Text>
      <Gap height={15} width={0} />
      <BookList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
