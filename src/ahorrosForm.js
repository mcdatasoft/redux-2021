import React, { Component } from "react";

import { Paper, Typography, TextField, Button } from "@material-ui/core";

class Pantalla_banco extends Component {
  constructor(props) {
    super(props);
    this.state = { monto: "" };
  }
  render() {
    return (
      <form>
        <p>{`Saldo Actual S/.${this.props.saldo}`}</p>
        <input onChange={this.cambiar_monto} value={this.state.monto} />
        <button onClick={this.enviar_informacion_digitada}>
          Envio al Controlador Principal
        </button>
        <button onClick={this.props.genera_interes}>
          GENERACION DE INTERESES
        </button>
        <button onClick={this.props.genera_comision}>
          APLICAR DESCUENTOS POR COMSION
        </button>
      </form>
    );
  }
  cambiar_monto = e => {
    if (Number.isInteger(parseInt(e.target.value))) {
      this.setState({ monto: parseInt(e.target.value) });
    }
  };
  enviar_informacion_digitada = () => {
    if (this.state.monto === "") {
      return;
    }
    this.props.deposito(this.state.monto);
    this.setState({ monto: "" });
  };
}
export default Pantalla_banco;
