import { ApolloClient, InMemoryCache } from "@apollo/client";

// Membuat instance client dari ApolloClient.
export const client = new ApolloClient({
  // Properti uri menentukan endpoint GraphQL server yang akan dihubungi oleh Apollo Client. Dalam hal ini, server berjalan di http://localhost:4000.
  uri: "http://localhost:4000",
  // Properti cache menentukan jenis cache yang akan digunakan. InMemoryCache digunakan di sini, yang menyimpan data cache di dalam memori aplikasi.
  cache: new InMemoryCache(),
});
