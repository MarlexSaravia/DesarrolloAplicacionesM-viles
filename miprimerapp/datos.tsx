import React from "react";
import { StyleSheet, View, Text  } from "react-native";

export const Datos = (props) => {
   return( <View>

        <Text style={Formato.titulo}>Integrante: {props.integrante}</Text>
        <Text style={Formato.subtitulo}>Nombre completo: {props.nombre}</Text>
        <Text style={Formato.subtitulo}>Edad: {props.edad}</Text>
        <Text style={Formato.subtitulo}>Carrera: {props.carrera}</Text>
        <Text style={Formato.subtitulo}>Ciclo: {props.ciclo}</Text>

    </View>
    );
}

const Formato = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 5,
  },
});