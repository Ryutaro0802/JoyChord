import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { MusicalInstrument } from './plugin/MusicalInstrument'
import SoundPlayButton from './components/SoundPlayButton'

export default function App() {
  const [count, setCount] = useState(0)
  const musicalInstrument: MusicalInstrument = new MusicalInstrument()
  const soundPlay = (toneName: 'A'): void => {
    const createMethodName = (name: 'A'): 'playA' => {
      if (name === 'A') {
        return 'playA'
      }
      return 'playA'
    }

    musicalInstrument[createMethodName(toneName)]()
  }
  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button
        title="Press me"
        onPress={() => setCount(count + 1)}
      />
      <SoundPlayButton soundPlay={soundPlay} toneName="A" />
      <SoundPlayButton soundPlay={soundPlay} toneName="A" />
      {/* <View style={styles.buttonGroup}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onPress()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onPress()}>
            <Text style={styles.buttonText}>D</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onPress()}>
            <Text style={styles.buttonText}>E</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: '#4494CD',
    width: 50,
    height: 50,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
});
