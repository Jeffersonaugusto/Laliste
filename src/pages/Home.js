import React from 'react';
import { StyleSheet,Text, View, ImageBackground, Navigator} from 'react-native';
import Background from '../Components/Background';
import Botao from '../Components/UI/Button/Botao'
import { LinearGradient } from 'expo';
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
                  
                  <LinearGradient colors={['#FC7950', '#FF5F6D']} style={styles.button}>
                    <Botao></Botao>
                  </LinearGradient>
                  <LinearGradient colors={['#FC7950', '#FF5F6D']} style={styles.button}>
                    <Botao />
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
      imagemTop:{
        width: '100%',
        height: '30%'        
      },
      fundoInferior:{
        position:'relative',
        width: '100%',
        height: '65%',
        alignItems: 'center',
      },

      cardTop:{
      position: 'absolute',
      width:'75%',
      height: '50%',
      backgroundColor: '#fff',
      top:-60,
      borderColor:'#000',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.11,
      shadowOffset: { width: 0, height: 0 },
      elevation: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    cardButton:{
      flexDirection: 'row',
      width: '75%',
      height:'30%',
      backgroundColor:'#FFF',
      alignItems: 'center',
      justifyContent: 'space-around',
      top:'55%'
    },
    button:{
      width:'45%',
      height:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    }
    
  });
  