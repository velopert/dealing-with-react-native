import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {getBrightness, setBrightness} from './Brightness';
import DeviceBrightness from '@adrianso/react-native-device-brightness';

function App() {
  const [value, setValue] = useState(-1);
  const onPress = async () => {
    const brightness = await getBrightness();
    setValue(brightness);
  };

  const onPressLow = () => {
    setBrightness(0.25);
    DeviceBrightness.setBrightnessLevel(0.25);
  };
  const onPressHigh = () => {
    setBrightness(1);
    DeviceBrightness.setBrightnessLevel(1);
  };

  return (
    <SafeAreaView style={styles.block}>
      <Button title="Update Brightness" onPress={onPress} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <Button title="Low Brightness" onPress={onPressLow} />
      <Button title="High Brightness" onPress={onPressHigh} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 64,
  },
});

export default App;
