import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import "./styles.css";
import store from "./store";
import Pantalla_principal from "./pantalla_principal";
import Pantalla_formulario from "./formulario";
//import Pantalla_banco from './ahorrosForm';
import Pantalla_saldos from "./controlAhorros";
import Pantalla_movimientos from "./controlOperaciones";

import { Servicio } from "./servicio";
function grabar_registro(objeto) {
  return { type: "CARGA_COMPLETA", payload: { objeto } };
}
function recuperar_datos(resp) {
  return { type: "RETRIEVE_SERVER", payload: { resp } };
}
const List = ({ datos }) =>
  datos.map(({ id, city, name, __typename }) => (
    <div key={id}>
      <p>{`${city}: ${name}`}</p>
    </div>
  ));
const ListWithState = connect(state => ({ datos: state.alumnos.datos }))(List);
const FormWithDispatch = connect(
  state => ({ datos: state.alumnos.datos }),
  dispatch => ({
    extraer_objeto_digitado(objeto) {
      console.log("aqui puede ser");
      //dispatch(grabar_registro(objeto));
      Servicio.proceso_insertar(objeto.city, objeto.name)
        .then(() => {
          Servicio.proceso_consulta().then(resp => {
            if (resp) {
              dispatch(recuperar_datos(resp));
            }
          });
        })
        .catch(err => {
          console.log(err.toString());
        });
    }
  })
)(Pantalla_formulario);
//<Pantalla_principal />

function App() {
  return (
    <div className="App">
      <ListWithState />
      <FormWithDispatch />
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <Pantalla_movimientos />
      <Pantalla_saldos />
    </div>
  );
}
*/
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
