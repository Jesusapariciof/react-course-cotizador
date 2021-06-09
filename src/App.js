import logo from './logo.svg';
import React, {Fragment, useState} from 'react';
import './App.css';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Mensaje from './componentes/Mensaje'
import Resultado from './componentes/Resultado'
import Spinner from './componentes/Spinner'


function App() {

  const[cantidad, setCantidad] = useState(0);
  const[plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0);
  const [cargando, setCargando]= useState (false);

  //carga CONDICIONAL de componentes
  let componente;

  if(cargando){
    componente = <Spinner />
  } else if(total === 0){
    componente = <Mensaje />
  }else{
    componente = <Resultado
    
                  total={total}
                  plazo = {plazo}
                  cantidad = {cantidad}
    />
  }


  return (
    <Fragment>
      <Header 
            titulo ="Cotizador de préstamos" 
      />
      <div className="container">
      <Formulario 
        cantidad = {cantidad}
        setCantidad = {setCantidad}
        plazo = {plazo}
        setPlazo = {setPlazo}
        total = {total}
        setTotal={setTotal}
        setCargando={setCargando}
      />
      <div className="mensajes">
        {componente}
      </div>
      </div>

    </Fragment>
  );
}


export default App;
