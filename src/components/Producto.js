import React from 'react';

const Producto = ({producto, carrito , setProducto, productos}) => {
    const {name, price, id} = producto
    
    // Agregar Producto al carrito

    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        setProducto([
            ...carrito,
            producto
        ])
        
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>{price} </p>
            <button type="button" 
            onClick={()=> seleccionarProducto(id)}> Comprar</button>
        </div>
    )
}

export default Producto;