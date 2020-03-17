const cliente = {
  titular: "Marcos Cuadros",
  dinero: 100,
  interes: 0,
  cobro: 0,
  importe: 0
};
export default function transacciones(cuenta = cliente, acciones) {
  switch (acciones.type) {
    case "INTERES":
      return Object.assign({}, cuenta, {
        dinero: cuenta.dinero * 1.2,
        interes: cuenta.dinero * 0.2
      });
    case "DEPOSITO":
      return Object.assign({}, cuenta, {
        dinero: cuenta.dinero + acciones.valores.monto,
        importe: acciones.valores.monto
      });
    case "IMPUESTO":
      return Object.assign({}, cuenta, {
        dinero: cuenta.dinero - cuenta.dinero * 0.2,
        cobro: cuenta.dinero * 0.2
      });
    default:
      return cuenta;
  }
}
/*
var objeto = require('redux');
let banco = objeto.createStore(transacciones);
banco.subscribe(() =>
  console.log(banco.getState())
)

banco.dispatch({ type: 'INTERES' })
// 10
banco.dispatch({ type: 'INTERES' })
// 20
banco.dispatch({ type: 'INTERES' })
// 30
banco.dispatch({ type: 'IMPUESTO' })
// 15
banco.dispatch({ type: 'no existe' })
// 15
*/
