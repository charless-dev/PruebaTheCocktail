import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { listarUsuarios, cargando, cargaCompleta } from "../actions";

class ListaUsuarios extends Component {

    listaUsuarios = async () => {
        this.props.listarUsuarios();
    };
  
    render() {

        const { cargandoUsuarios, usuarios, color } = this.props;
        const estilos = {
            backgroundColor: color,
            borderColor: color
        }

        return (
            <Fragment>
                <div className="col-12 text-center pt-5">
                    <p className="mb-4">Haz clic para cargar la lista de usuarios.</p>
                    {
                    cargandoUsuarios ? <button className="btn btn-primary" disabled>Cargado usuarios...</button>
                    : <button className="btn btn-success" onClick={this.listaUsuarios}>Cargar Usuarios</button>
                    }                    
                </div>
                <div className="col-md-8 offset-md-2 pt-4">
                    <table className="table text-center">
                        <thead className="thead-dark">
                            <tr>
                            <th style={estilos}>Id</th>
                            <th style={estilos}>Name</th>
                            <th style={estilos}>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            usuarios.map( (usuario, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.name}</td>
                                        <td>{usuario.email}</td>
                                    </tr>
                                )
                            })                 
                        }
                        </tbody>
                    </table>  
                </div>                      
            </Fragment>
        );
    }

}

function mapStateToProps (state) {
    return {
        usuarios: state.app.usuarios,
        cargandoUsuarios: state.app.cargando
    }
}

export default connect(mapStateToProps,{ listarUsuarios, cargando, cargaCompleta })(ListaUsuarios);
