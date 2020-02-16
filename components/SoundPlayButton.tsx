import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface SoundPlayButtonProps {
  toneName: 'C' | 'D' | 'E' | 'F' | 'G' | 'A'
  soundPlay: (toneName: 'C' | 'D' | 'E' | 'F' | 'G' | 'A') => void
}

const SoundPlayButton: FC<SoundPlayButtonProps> = ({ toneName, soundPlay }) => {
  const onPress = () => {
    soundPlay(toneName)
  }
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onPress()}>
        <Text style={styles.buttonText}>{toneName}</Text>
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

export default SoundPlayButton