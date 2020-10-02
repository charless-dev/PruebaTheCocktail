import API from '../config';

const ENDPOINTS = {
    LISTA_USUARIOS: 'users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE'
}

const UsuariosServicio = {
    listaUsuarios: async () => {
        try {
            const lista = await API.get(ENDPOINTS.LISTA_USUARIOS)
            return lista.data
        } catch (e) {
            console.log(e);
        }
    }
}

export default UsuariosServicio;