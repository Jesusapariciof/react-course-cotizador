import React from 'react';

const Resultado = ({cantidad, total, plazo}) => {
    return ( 
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es {cantidad} €</p>
            <p>El plazo solicitado es {plazo} meses</p>
            <p>Su pago mensual es de: {(total / plazo).toFixed(2)} €</p>
            <p>Total a pagar {total} €</p>

        </div>
     );
}
 
export default Resultado;