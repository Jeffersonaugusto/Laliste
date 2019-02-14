import React from 'react';
import { StyleSheet,Text, View, ImageBackground, Navigator} from 'react-native';


export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./assets/img/background.jpg')} style={styles.container}>
        <View style={styles.camadaBlack}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>LA LISTE</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
      
    },
      camadaBlack:{
        position:'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.58,
        alignItems: 'center',
        justifyContent: 'center'
        
      },
      textContainer:{
        alignItems: 'center',
        justifyContent: 'center'
      },
      title:{
      fontSize:60,
      color: '#FC7950',
      textTransform:'uppercase'  
      
    }
  });
  