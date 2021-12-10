import React, { useRef } from 'react';
import { BaseDatos } from '../ConfiguracionFirebase';
import './Usuario';
import './Publicacion';

function NuevaPublicacion({ AgregarNuevaPublicacion }) {
    const userRef = useRef(null);
    const publicacionRef = useRef(null);

    function AgregarPublicacion() {
        const publicacion = {
            user: userRef.current.value,
            post: publicacionRef.current.value,
        }

        BaseDatos.collection('Publicaciones').add(publicacion);

        userRef.current.value = "";
        publicacionRef.current.value = "";
        AgregarNuevaPublicacion(publicacion);
    }

    return (
        <div className="ContPublicarPost">
            <div className="contenedor">
                <div className="fila">
                    <div className="HeaderPublicaciones">
                        Publicaciones
                    </div>
                </div>

                <div className="fila">
                    <div className="columna">
                        <input type="text" placeholder="Escriba su nombre de usuario" className="texto" ref={userRef} />
                    </div>
                </div>

                <div className="fila">
                    <div className="columna">
                        <input type="text" placeholder="Escriba su publicacion" className="texto" ref={publicacionRef} />
                    </div>
                </div>
                <div className="Separador">
                    .
                </div>

                <div className="fila">
                    <div className="columna">
                        <button className="boton" onClick={AgregarPublicacion}>Publicar nuevo post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevaPublicacion;