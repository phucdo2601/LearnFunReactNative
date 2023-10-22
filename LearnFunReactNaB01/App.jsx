import React from 'react'
import { StyleSheet, View } from 'react-native'
import CurrrentWeather from './src/components/CurrentWeather'

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <CurrrentWeather />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
