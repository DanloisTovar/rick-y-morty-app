import React from 'react';

function Personajes({ personajes = [] }) {
  return (
    <div className="row">
      {/* fila: */}

      {personajes.map((item, index) => {
        return (
          /* columna: */
          <div key={index} className="col mb-4">
            {/* tarjeta personaje: */}
            <div
              className="card"
              style={{
                minWidth: '2rem',
                border: '3px solid',
                boxShadow:
                  '-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
              }}
            >
              {/* imagen: */}
              <img
                src={item.image}
                alt={`imagen de ${item.name}`}
                style={{
                  minWidth: '2rem',
                }}
              />

              {/* informacion: */}
              <div className="informacion card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p>location: {item.location.name}</p>
                <p>Gender: {item.gender}</p>
                <p>Especie: {item.species}</p>
              </div>
            </div>

            {/* fin columna */}
          </div>
        );
      })}
    </div>
  );
}

export default Personajes;
