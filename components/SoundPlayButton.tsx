import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SoundPlayButton(props: any) {
  const onPress = () => {
    props.soundPlay(props.toneName)
  }
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onPress()}>
        <Text style={styles.buttonText}>{props.toneName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#4494CD',
    width: 50,
    height: 50,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
