import React, { useRef } from 'react';
import { BaseDatos } from '../ConfiguracionFirebase.js';
import './Usuario';
import '../css/Usuario.css'

function NuevoUsuario({ AgregarNuevoUsuario }) {
    const usuarioRef = useRef(null);
    const claveRef = useRef(null);
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);

    function AgregarUsuario() {
        const usuario = {
            user: usuarioRef.current.value,
            clave: claveRef.current.value,
            nombre: nombreRef.current.value,
            apellido: apellidoRef.current.value,
        }

        BaseDatos.collection('Usuarios').add(usuario);

        usuarioRef.current.value = "";
        claveRef.current.value = "";
        nombreRef.current.value = "";
        apellidoRef.current.value = "";
        AgregarNuevoUsuario(usuario);
    }

    return (
        <div className="ContNuevoUsuario">
            <div className="contenedor">

                <div className="fila">
                    <div className="columna">
                        Registrarse
                    </div>
                </div>

                <div className="fila">
                    <div className="columna">
                        <input type="text" placeholder="Ingrese un nuevo nombre de usuario" className="texto" ref={usuarioRef} />
                    </div>
                </div>

                <div className="fila">
                    <div className="columna">
                        <input type="password" placeholder="Ingrese una nueva contraseña" className="texto" ref={claveRef} />
                    </div>
                </div>

                <div className="fila">
                    <div className="columna">
                        <input type="text" placeholder="Ingrese su nombre" className="texto" ref={nombreRef} />
                    </div>
                </div>

                <div className="fila">
                    <div className="columna">
                        <input type="text" placeholder="Ingrese su apellido" className="texto" ref={apellidoRef} />
                    </div>
                </div>
                <div className="Separador">
                    .
                </div>

                <div className="fila">
                    <div className="columna">
                        <button className="boton" onClick={AgregarUsuario}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoUsuario;