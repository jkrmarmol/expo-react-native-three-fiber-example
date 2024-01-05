import * as THREE from "three";
import { Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import Model from './src/components/Model';
import Loader from './src/components/Loader';



export default function App(props: JSX.IntrinsicElements["group"]) {
  const { width, height } = useWindowDimensions();
  const [OrbitControls, events] = useControls();


  return (
    <View style={styles.container}
      {...events}
    >
      <Canvas
        style={{
          flex: 1,
          borderWidth: 2,
          width: width
        }}
      >
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
