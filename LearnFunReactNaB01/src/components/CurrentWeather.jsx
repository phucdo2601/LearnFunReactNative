import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const CurrrentWeather = () => {
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Feather name="sun" color={`black`} size={100} />
          <Text>Current weather</Text>
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feel like 5</Text>

          <View style={styles.highLowWrapper}>
            <Text style={styles.highLow}>Hign: 8 </Text>
            <Text style={styles.highLow}>Low: 6</Text>
          </View>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrrentWeather
