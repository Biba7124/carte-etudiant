import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.titleBlock}>
          <Text style={styles.appTitle}>Student Card App</Text>
          <Text style={styles.schoolName}>EMSI CENTRE</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>Ayatallah</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>Hiba</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025/2026</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
    gap: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },
  logo: {
    width: 150,
    height: 120,
  },
  titleBlock: {
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#31a76aff', 
    letterSpacing: 0.5,
  },
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000ff',
    letterSpacing: 1,
  },
  info: {
    alignSelf: 'flex-start',
    marginLeft: 40,        
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#474951ff', 
    fontWeight: '500',
  },
  value: {
    fontSize: 17,
    color: '#4e7ddaff', 
    fontWeight: 'bold',
  },
});