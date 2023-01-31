import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={(pressed) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
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
    backgroundColor: Colors.primary500,
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
