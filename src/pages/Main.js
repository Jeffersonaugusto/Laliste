import React from 'react';
import { StyleSheet,Text, View, ImageBackground} from 'react-native';
import DigitalButton  from '../Components/Digital/Digital';


export default class Main extends React.Component {
  static navigationOptions = { 
    header: null, 
    };
  render() {    
    return (
      <ImageBackground source={require('../../assets/img/background.jpg')} style={styles.container}>
        <View style={styles.camadaBlack}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>LA LISTE</Text>
            <Text style={styles.text}>Monte sua lista!</Text>
          </View>
          <View style={styles.button}>
          <DigitalButton  navigation={this.props.navigation}></DigitalButton>
            <Text style={styles.text}>Entre</Text>
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
    
  },
  text:{
    fontSize:15,
    color: '#FFF'
  },
  button:{
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 80
  },
});
