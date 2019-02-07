import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import SvgDigital from './assets/img/digital.svg'

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/img/background.jpg')} style={styles.container}>
      <View style={styles.camadaBlack}>
        <View>
          <Text >La Liste</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <SvgDigital></SvgDigital>
          <Button></Button>
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
    camadaBlack:{
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      opacity: 0.58,
      alignItems: 'center',
      justifyContent: 'center',
    }
});
