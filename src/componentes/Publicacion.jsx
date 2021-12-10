import React from 'react';
import '../css/Publicacion.css'

function Publicacion({ user, post }) {

    return (
        <div className="ContPublicaciones">

            <div className="contenedor">

                <div className="fila">

                    <div className="columna">
                        Usuario:
                    </div>
                    <div className="columna">
                        {user}
                    </div>
                </div>
                <div className="linea"> </div>
            </div>

            <div className="contenedor">
                <div className="fila">

                    <div className="columna">
                        {post}
                    </div>

                </div>

            </div>
            <div className="linea"> </div>
        </div>

    )
}

export default Publicacion;