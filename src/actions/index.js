import UsuariosServicio from '../services/usuarios/';

export const ACTION_TYPES = {
    CARGAR_USUARIOS: 'CARGAR_USUARIOS',
    CARGANDO: 'CARGANDO',
    CARGA_COMPLETA: 'CARGA_COMPLETA'
}

export const cargando = () => {
    return (dispatch, getState) => {
        dispatch (
            {
                type: ACTION_TYPES.CARGANDO,
                payload: true
            }
        )
    }    
};

export const cargaCompleta = () => {
    return (dispatch, getState) => {
        dispatch (
            {
                type: ACTION_TYPES.CARGA_COMPLETA,
                payload: false
            }
        )
    }
};

export const listarUsuarios = () => {
    return async (dispatch, getState) => {
        dispatch (cargando())        
        const lista = await UsuariosServicio.listaUsuarios();
        dispatch ({
            type: ACTION_TYPES.CARGAR_USUARIOS,
            payload: lista.data
        })
        dispatch (cargaCompleta())
    }
}
