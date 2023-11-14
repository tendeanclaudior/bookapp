import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import { Gap } from "../../Components";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

// Definisi query GraphQL untuk mendapatkan data buku dari server.
const BOOKS_QUERY = gql`
  query GetBooks {
    books {
      author
      desc
      title
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);
  const [isConnected, setIsConnected] = useState(true);

  // Menggunakan useEffect untuk memantau status jaringan menggunakan NetInfo. Menyimpan status koneksi dalam state isConnected.
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  // Kondisi untuk menangani situasi ketika tidak ada koneksi internet (!isConnected)
  if (!isConnected) {
    return Alert.alert("Sorry", "No Internet Connection");
  }

  // Kondisi saat dala proses loading
  if (loading) {
    return <ActivityIndicator />;
  }

  // Kondisi saat terdapat error
  if (error) {
    return Alert.alert(error?.message);
  }

  return (
    <FlatList
      data={data.books}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.containerView}>
          <View style={styles.container}>
            <View style={styles.headerContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}>{item.author}</Text>
            </View>
            <Gap height={15} width={0} />
            <View style={styles.line} />
            <Gap height={10} width={0} />
            <Text style={styles.subTitle}>{item.desc}</Text>
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default BookList;

const styles = StyleSheet.create({
  containerView: {
    paddingHorizontal: 16,
  },
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 30,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#020202",
  },
  line: {
    borderWidth: 2,
    borderColor: "#020202",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#020202",
  },
});
