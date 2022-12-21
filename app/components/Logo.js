import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Logo() {
  return <Image source={require('../assets/logonotes.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    paddingLeft: 15,
  },
})
