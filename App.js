import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import SVGImg from './assets/communitycopy.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <SVGImg width={200} height={200} />
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
});
