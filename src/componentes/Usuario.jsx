import React from 'react';
import '../css/Usuario.css'

function Usuario({ user, clave, nombre, apellido }) {
    return (
        <div className="contenedor">
            <div className="fila">
                <div className="columna">

                </div>
                <div className="columna">
                    {user}
                </div>
            </div>

            <div className="fila">
                <div className="columna">

                </div>
                <div className="columna">
                    {clave}
                </div>
            </div>

            <div className="fila">
                <div className="columna">

                </div>
                <div className="columna">
                    {nombre}
                </div>
            </div>

            <div className="fila">
                <div className="columna">

                </div>
                <div className="columna">
                    {apellido}
                </div>
            </div>
        </div>
    )
}

export default Usuario;