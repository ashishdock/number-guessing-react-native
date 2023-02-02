import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    // alignContent: 'stretch',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    // textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),

    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
    width: 300,
  },
});
