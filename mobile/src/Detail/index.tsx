import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IMarker } from "../Home";

type DetailRoute = RouteProp<{ detail: IMarker }, "detail">;

export default function Detail() {
  const { params } = useRoute<DetailRoute>();
  const [address, setAddres] = useState<any>();
  const navigation = useNavigation();
  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${params.latitude}&lon=${params.longitude}&format=json`
    ).then(async (request) => {
      const data = await request.json();

      setAddres(data);
      navigation.setOptions({
        title: params.name,
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.name}</Text>
      <Text style={styles.subTitle}>{params.description}</Text>

      <Text style={styles.section}>Dados da Orden de Serviço</Text>
      <Text style={styles.subTitle}>id: {params.id}</Text>
      <Text style={styles.text}>Titulo da Ordem de Serviço: {params.titleOS}</Text>
      <Text style={styles.text}>Descrição: {params.descriptionOS}</Text>
      <Text style={styles.text}>Desenvolvedor Responsável: {params.dev}</Text>
      <Text style={styles.text}>Staus da Ordem de Serviço: {params.category}</Text>
      <Text style={styles.text}>Data de Criação da Ordem de Serviço: {params.created}</Text>
      
      

      <Text style={styles.section}>Contato do Desenvolvedor</Text>
      <Text style={styles.text}>{params.contact}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
    padding: 20,
  },
  title: {
    color: "#322153",
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#6C6C80",
    fontSize: 18,
    fontWeight: "400",
  },
  section: {
    color: "#322153",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 20,
  },
  text: {
    color: "#6C6C80",
    fontSize: 16,
  },
});
