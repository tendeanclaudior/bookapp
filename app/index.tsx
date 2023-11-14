import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Graphql/client";
import { Home } from "./Pages";

const App = () => {
  return (
    // ApolloProvider memberikan konteks Apollo Client ke seluruh aplikasi. Ini memungkinkan komponen-komponen di dalamnya untuk menggunakan query dan mutasi GraphQL.
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
