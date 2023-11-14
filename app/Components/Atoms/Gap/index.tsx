import React, { FC } from "react";
import { View } from "react-native";

// Membuat tipe Props yang mendefinisikan properti yang dapat diterima oleh komponen Gap.
type Props = {
  width: number;
  height: number;
};

const Gap: FC<Props> = ({ width, height }) => {
  // Mendefinisikan komponen fungsional Gap dengan tipe prop Props. Komponen ini mengambil properti width dan height.
  return <View style={{ width: width, height: height }} />;
};

export default Gap;
