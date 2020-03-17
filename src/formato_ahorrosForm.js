import React, { Component } from "react";

import { Paper, Typography, TextField, Button } from "@material-ui/core";

class Pantalla_bancoFormato extends Component {
  constructor(props) {
    super(props);
    this.state = { monto: "" };
  }
  render() {
    return (
      <Paper>
        <form>
          <p>{`Saldo Actual S/.${this.props.saldo.toFixed(2)}`}</p>
          <TextField
            name="monto"
            label="Importe"
            value={this.state.monto}
            onChange={this.cambiar_monto}
            margin="normal"
          />
          <Button
            onClick={this.enviar_informacion_digitada}
            color="primary"
            variant="raised"
          >
            Envio al Controlador Principal
          </Button>
          <Button
            onClick={this.props.genera_interes}
            color="primary"
            variant="raised"
          >
            GENERACION DE INTERESES
          </Button>
          <Button
            onClick={this.props.genera_comision}
            color="primary"
            variant="raised"
          >
            APLICAR DESCUENTOS POR COMSION
          </Button>
        </form>
      </Paper>
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
export default Pantalla_bancoFormato;
