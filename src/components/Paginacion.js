import React from 'react';

function Paginacion({ prev, next, paginaAnterior, paginaSiguiente }) {
  const anterior = () => {
    paginaAnterior();
  };
  const siguiente = () => {
    paginaSiguiente();
  };

  return (
    <nav>
      {/* antes */}

      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link titulo-principal" onClick={anterior}>
              Anterior
            </button>
          </li>
        ) : null}

        {/* despues: */}

        {next ? (
          <li className="page-item">
            <button className="page-link titulo-principal" onClick={siguiente}>
              Siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Paginacion;
