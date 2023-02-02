import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

export default function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 15,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 15,
    elevation: 19,
    shadowColor: 'black',
    shadowOffset: { width: 9, height: 9 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
});
