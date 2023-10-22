import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text>Current weather</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center'
  }
})

export default App
