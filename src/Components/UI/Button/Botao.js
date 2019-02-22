import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
export default class Botao extends React.Component {
  render() {
    return (
      <View >
        <Button title="teste" onPress={()=> this.props.navigator.push({id:'Home'})} type="clear" />
      </View>
    );
  }
}

