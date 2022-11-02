import './App.css';

// Importamos componentes

import MyButton from './components/MyButton/MyButton';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  // CSS en JS
  const styleH3 = { backgroundColor: "red", color: "blue" }

  let titulo = <h3 style={styleH3}>"Primeros Avances en el proyecto de ReactJs"</h3>


  // En el return va la UI (User Interface), lo que ve el usuario

  return (
    
    <div className="App">

      <header className="App-header">

        <NavBar/>

        {/* Llamo a la variable declarada, y editada con CSS en JS */}
        {titulo}

        <p>
          Empiezo a generar componentes.
        </p>

        {/* Estoy llamando a MyButton 3 veces, pero con propiedades distintas cada vez */}

        <MyButton text="Botón sin funciones 1" color="darkgreen"/>
        <MyButton text="Botón sin funciones 2" color="darkblue"/>
        <MyButton text="Botón sin funciones 3" color="darkred"/>

        <ItemListContainer/>

      </header>

    </div>

  );
}

// Los componentes SIEMPRE arrancan con mayúscula, porque sino React los identifica como etiqueta

export default App;
