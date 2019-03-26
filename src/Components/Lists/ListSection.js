import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import{connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {fetchCategorias} from '../../Actions'
import ItemSection from './ItemSection';

class ListSection extends React.Component {
    componentDidMount(){
        //chama action creatorpara pegar a lista
   categorias = this.props.fetchCategorias()
    }
    render() {
        if(!this.props.categorias){
            return(
            <View>
                <Text>Loading</Text>
            </View>
            );
        }    

        return (
            <View style={styles.container}>
            <FlatList 
            data={ this.props.categorias}
            keyExtractor={item=> item.nome}
            renderItem={({ item }) =>  <ItemSection key={item.nome} item={item}/>}
          />

            </View>

        );
    }
}

const mapStateToProps =(state)=>{ 
    return{ categorias: state.categorias.all}
}
const mapDispacthToProps =(dispatch) =>{
        return bindActionCreators({ fetchCategorias }, dispatch)
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: '100%',
    height: '100%',  

    },
})    
export default connect(mapStateToProps, mapDispacthToProps)(ListSection)