import React from 'react';
import {StyleSheet,Text, View,} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';


const ItemSection= (props) =>{
   
    return (    
        <View style={styles.container}>
            <LinearGradient colors={['#FC7950', '#FF5F6D']} style={styles.button}>
                <Button title={props.item.nome} onPress={()=> this.props.navigation.push('ListItens')} type="clear"  />               
            </LinearGradient>
        </View>
    );
}    
const styles = StyleSheet.create({
    container: {
    flex: 1,

    width: '100%',
    height: '50%',
    backgroundColor: '#FFF',
    },

    button: {
        width: '100%',
        height: '50%',

        borderRadius: 10
    }
})    

export default ItemSection;