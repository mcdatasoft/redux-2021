import { createStore, combineReducers } from "redux";
import alumnos from "./colegio";
import reducers from "./reducer";
import transacciones from "./ahorros";
import sistemaTransaccional from "./operaciones";
export default createStore(
  combineReducers({
    almacen: reducers,
    alumnos: alumnos,
    operaciones: transacciones,
    movimientos: sistemaTransaccional
  })
);

//export default createStore(reducers);
