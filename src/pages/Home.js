import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Navigator } from 'react-native';
import Background from '../Components/Background';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import ListaSvg from '../Components/UI/Svg/ListaSvg'
import SacolaSvg from '../Components/UI/Svg/SacolaSvg'
export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Background style={styles.imagemTop}></Background>
        <View style={styles.fundoInferior}>
          <View style={styles.cardTop}>
            <Text>Same here</Text>
          </View>
          <View style={styles.cardButton}>
            <LinearGradient colors={['#FC79FF', '#FF5F6D']} style={styles.button}>
              <Button onPress={()=> this.props.navigation.push('ListItens')} type="clear" icon={<ListaSvg/>} />
            </LinearGradient>
            <LinearGradient colors={['#FC7950', '#FF5F6D']} style={styles.button}>
              <Button onPress={()=> this.props.navigation.push('BuyItens')} type="clear" icon={<SacolaSvg/>} />
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imagemTop: {
    width: '100%',
    height: '30%'
  },
  fundoInferior: {
    position: 'relative',
    width: '100%',
    height: '65%',
    alignItems: 'center',
  },

  cardTop: {
    position: 'absolute',
    width: '75%',
    height: '50%',
    backgroundColor: '#fff',
    top: -60,
    borderColor: '#000',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.11,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardButton: {
    flexDirection: 'row',
    width: '75%',
    height: '30%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: '55%'
  },
  button: {
    width: '45%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }

});









