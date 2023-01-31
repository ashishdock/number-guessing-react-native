import { StyleSheet, Text, View } from 'react-native';
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
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
  },
});
