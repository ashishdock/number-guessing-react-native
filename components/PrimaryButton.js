import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log('pressed');
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={styles.buttonInnerContainer}
        android_ripple={{
          color: '#cccccc',
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 3,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingHorizontal: 15,
    paddingVertical: 9,
    elevation: 3,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  },
});
