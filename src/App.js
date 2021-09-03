/* importar navbar: */
import Navbar from './components/Navbar';
/* importar personajes: */
import Personajes from './components/Personajes';

/* Paginacion: */
import Paginacion from './components/Paginacion';

/* hooks */
import { useEffect, useState } from 'react';

/* stilos: */
import styled from 'styled-components';

const Background = styled.div`
  /* letra: */
  @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

  .titulo-principal {
    color: green !important;
    font-family: 'Creepster', cursive;
  }
  background: #348f50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #56b4d3,
    #348f50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #56b4d3,
    #348f50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
function App() {
  /* hook: */
  const [personajes, setPersonaje] = useState([]);

  const [info, setinfo] = useState({});

  /* Api: */
  const url = 'https://rickandmortyapi.com/api/character';

  function ApiFetch(url) {
    fetch(url)
      .then((res) => res.json())
      .then((datos) => {
        setPersonaje(datos.results);
        setinfo(datos.info);
      })
      .catch((err) => console.log(err));
  }

  /* funcionalidades de paginas: */
  const paginaAnterior = () => {
    ApiFetch(info.prev);
  };
  const paginaSiguiente = () => {
    ApiFetch(info.next);
    console.log('ejecuta');
    console.log(info.next);
  };
  /* hook */
  useEffect(() => {
    ApiFetch(url);
  }, []);

  return (
    <Background>
      <Navbar titulo="Rick y Morty App..." />

      <div className="container mt-5">
        <Paginacion
          prev={info.prev}
          next={info.next}
          paginaAnterior={paginaAnterior}
          paginaSiguiente={paginaSiguiente}
        />
        {/* agregar peronajes */}
        <Personajes personajes={personajes} />
      </div>
    </Background>
  );
}

export default App;
