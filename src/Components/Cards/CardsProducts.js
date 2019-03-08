import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ListaSvg from '../UI/Svg/ListaSvg'
import { Button } from 'react-native-elements';

export default class CardsProducts extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <View>
            <Text>Cenoura</Text>
            <Text>Total R$00,00</Text>
            <View>
                 <Button onPress={()=> this.props.navigation.push('ListItens')} type="clear" icon={<ListaSvg/>} />   
                 <Button onPress={()=> this.props.navigation.push('ListItens')} type="clear" icon={"-"} />
                 <Text>Same here</Text>
                 <Button onPress={()=> this.props.navigation.push('ListItens')} type="clear" icon={"+"} />
            </View>
            <Text>Unidade</Text>
            <TextInput>R$00,00</TextInput>
          </View>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    
  });
  