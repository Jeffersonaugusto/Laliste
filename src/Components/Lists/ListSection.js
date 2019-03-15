import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import{connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {fetchCategorias} from '../../Actions'
import ItemSection from './ItemSection';

class ListSection extends React.Component {
    componentDidMount(){
        //chama action creatorpara pegar a lista
        this.props.fetchCategorias()
    }
    render() {
        if(!this.props.categorias){
            return(
            <View>
                <Text>Loading</Text>
            </View>
            );
        }    
        const secao = this.props.categorias.map(categorias =>{
            return <ItemSection key={categorias.nome} item={categorias}/>

        })
        return (
      
            <View style={styles.container}>
               {secao}
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
    flexDirection: 'row',
    
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    flexWrap:'wrap',
    },
})    
export default connect(mapStateToProps, mapDispacthToProps)(ListSection)