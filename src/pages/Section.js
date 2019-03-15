import React from 'react';
import { StyleSheet, View } from 'react-native';
import Background from '../Components/Background';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import ListaSvg from '../Components/UI/Svg/ListaSvg'
import SacolaSvg from '../Components/UI/Svg/SacolaSvg'
import ListSection from '../Components/Lists/ListSection'
export default class Section extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Background style={styles.imagemTop}></Background>
        <View style={styles.fundoInferior}>
            <ListSection/>
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
 
});
