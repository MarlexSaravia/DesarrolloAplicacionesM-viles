import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Datos} from './datos';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" /> 
      <Datos integrante={1} nombre={"Matias Bello Chavez"} edad={21} carrera={"Ingenieria de Software"} ciclo={8}></Datos>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
