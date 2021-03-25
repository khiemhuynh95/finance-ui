import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors'
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
        <Header style={styles.header}/>
        <View style={styles.walletArea}>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appBackground,
    width: '100%',
    height: '100%',
    
  },
  header: {
    marginTop: 56,
  },
  walletArea: {
    marginTop: 32,
    backgroundColor: colors.white,
    height: 180,
    marginHorizontal: 24,
    borderRadius: 20,
    shadowColor: '#000000',
        shadowOffset: {
          width: 0,
         height: 25
        },
        shadowRadius: 12,
        shadowOpacity: 0.08,
  }
});
