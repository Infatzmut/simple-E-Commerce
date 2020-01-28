import React, {Fragment, useState} from 'react';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  // Crear listado de productos 

  const [productos, saveProductos] = useState([
    {id:1, name: "Camisa React", price: 58},
    {id:2, name: "Camisa Node js", price: 60},
    {id:3, name: "Camisa Vue", price: 40},
    {id:4, name: "Camisa Angular", price: 50},
  ])

  // State para un carrito de compras 
  const [carrito, setProducto] = useState([]);

  // Obtener la fecha 
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <h1>Lista de productos</h1>
      {
        productos.map(producto => (
          <Producto 
            key={producto.id}
            producto= {producto}
            productos = {productos}
            carrito = {carrito}
            setProducto = {setProducto}
          />
        ))
      }
      <Carrito
      carrito= {carrito}></Carrito>
    </Fragment>  
  );
}

export default App;
