import {combineReducers} from 'redux'
import  CategoriasReducers from './CategoriaReducers'
export default combineReducers({
    categorias: CategoriasReducers
})