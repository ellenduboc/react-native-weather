import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Header />
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={require('./src/assets/banner.png')}
        />
        <Text style={styles.textCelsius}>8°</Text>
        <Text style={styles.textWeather}>CLEAR</Text>
        <Text style={styles.textDate}>THURSDAY, JANUARY 18</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#162840',
    flex: 1,
  },
  wrapper: {
    alignItems: 'center',
    marginTop: 78,
  },
  image: {
    height: 263,
    width: 341,
  },
  textCelsius: {
    paddingTop: 64,
    fontSize: 92,
    fontFamily: 'Sofia Pro Regular',
    color: '#FFFFFF',
    marginLeft: 35,
  },
  textWeather: {
    paddingTop: 24,
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
    color: '#FFFFFF',
  },
  textDate: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: 'CircularStd-Book',
    color: '#FFFFFF',
  },
});

export default App;
