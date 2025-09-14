import { Image } from 'expo-image';
import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const gastos = [
  { id: '1', concepto: 'Mantenimiento edificio A', monto: 350, fecha: '2025-09-01' },
  { id: '2', concepto: 'Pago de agua oficina central', monto: 120, fecha: '2025-09-03' },
  { id: '3', concepto: 'Publicidad inmobiliaria', monto: 500, fecha: '2025-09-05' },
  { id: '4', concepto: 'Reparación ascensor', monto: 800, fecha: '2025-09-08' },
];


const totalGastos = gastos.reduce((acc, g) => acc + g.monto, 0);

function GastoItem({ concepto, monto, fecha }: { concepto: string; monto: number; fecha: string }) {
  return (
    <ThemedView style={styles.itemContainer}>
      <ThemedText type="subtitle" style={styles.itemTitle}>{concepto}</ThemedText>
      <ThemedText style={styles.itemText}>💰 Monto: ${monto}</ThemedText>
      <ThemedText style={styles.itemText}>📅 Fecha: {fecha}</ThemedText>
    </ThemedView>
  );
}

export default function Inventario() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#121212', dark: '#121212' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      {/* Título */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.titleText}>📂 Inventario de Gastos</ThemedText>
      </ThemedView>

      {/* Resumen */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>📊 Resumen</ThemedText>
        <ThemedText style={styles.summaryText}>Total de gastos: ${totalGastos}</ThemedText>
        <ThemedText style={styles.summaryText}>Número de registros: {gastos.length}</ThemedText>
      </ThemedView>

      {/* Lista de gastos */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>📋 Lista de gastos</ThemedText>
        <FlatList
          data={gastos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GastoItem concepto={item.concepto} monto={item.monto} fecha={item.fecha} />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </ThemedView>

      {/* Acciones */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>⚙️ Acciones</ThemedText>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <ThemedText style={styles.buttonText}>➕ Agregar gasto</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
            <ThemedText style={styles.buttonText}>⬇️ Exportar</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#1E1E1E',
  },
  sectionTitle: {
    color: '#FFD700',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  summaryText: {
    color: '#E0E0E0',
    marginBottom: 6,
  },
  itemContainer: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#2A2A2A',
  },
  itemTitle: {
    color: '#ffffff',
    fontWeight: '600',
  },
  itemText: {
    color: '#B0B0B0',
  },
  separator: {
    height: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#6200EE',
    alignItems: 'center',
  },
  buttonSecondary: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#03DAC6',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  reactLogo: {
    height: 150,
    width: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0.4,
  },
});
