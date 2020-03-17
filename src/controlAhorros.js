import { connect } from "react-redux";
import Pantalla_banco from "./ahorrosForm";
import Pantalla_bancoFormato from "./formato_ahorrosForm";

function generar_intereses() {
  return { type: "INTERES", payload: {} };
}
import store from "./store";
const Pantalla_saldos = connect(
  state => ({ saldo: state.operaciones.dinero }),
  dispatch => ({
    genera_interes() {
      dispatch({ type: "INTERES" });
      var intereses = store.getState().operaciones.interes;
      var objeto = {
        id: Date.now(),
        tipo: "INTERES",
        name: "MARCOS CUADROS",
        __typename: "",
        monto: intereses
      };
      console.log(store.getState().operaciones.interes);
      dispatch({ type: "NUEVA_OPERACION", valores: { objeto } });
    },
    deposito(monto) {
      var objeto = {
        id: Date.now(),
        tipo: "DEPOSITO",
        name: "MARCOS CUADROS",
        __typename: "",
        monto: monto
      };
      dispatch({ type: "DEPOSITO", valores: { monto } });
      dispatch({ type: "NUEVA_OPERACION", valores: { objeto } });
    },
    genera_comision() {
      dispatch({ type: "IMPUESTO" });
      var descuento = store.getState().operaciones.cobro;
      var objeto = {
        id: Date.now(),
        tipo: "PORTES",
        name: "MARCOS CUADROS",
        __typename: "",
        monto: descuento
      };
      console.log(store.getState().operaciones.cobro);
      dispatch({ type: "NUEVA_OPERACION", valores: { objeto } });
    }
  })
)(Pantalla_bancoFormato);

export default Pantalla_saldos;
