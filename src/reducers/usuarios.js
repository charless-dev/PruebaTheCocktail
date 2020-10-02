import { ACTION_TYPES } from '../actions'

const initalState = {
    usuarios: [],
    cargando: false
}

export function listarUsuarios (state = initalState, action) {
    switch(action.type) {
        case ACTION_TYPES.CARGAR_USUARIOS:
            return {
                ...state, 
                usuarios: action.payload 
            }
        case ACTION_TYPES.CARGANDO:
            return {
                ...state, 
                cargando: action.payload 
            } 
        case ACTION_TYPES.CARGA_COMPLETA:
            return {
                ...state, 
                cargando: action.payload 
            }                        
        default:
            return state    
    }
}