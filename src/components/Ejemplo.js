import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

export const Ejemplo = () => {

  const [mostrar, setMostrar] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const caja = useRef();
  const boton = useRef();

  // useLayoutEffect(() => {
  //   console.log('> useLayoutEffect()');
  //   if(caja.current == null) return;
  //   const {bottom} = boton.current.getBoundingClientRect();
  //   caja.current.style.marginTop = `${bottom + 20}px`;
  // }, [mostrar]);

  useEffect(() => {
    console.log('> useEffect()');
    (mostrar) ? setMensaje('Hola mundo') : setMensaje('');
  }, [mostrar]);

  return (
    <div className='div-ejemplo'>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      <button ref={boton} onClick={() => setMostrar((prev) => !prev)}>
        Show Message
      </button>
      <div id='boxBlue' ref={caja}><label id='lblMsg'>{mensaje}</label></div>
    </div>
  );
}