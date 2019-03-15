export default(state = {}, action)=>{
    switch(action.type){
        case 'FETCH_CATEGORIAS':
            return{...state, all: action.payload.data}
        default:
            return state;
    }
}