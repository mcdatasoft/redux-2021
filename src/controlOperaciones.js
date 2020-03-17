import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, List, ListItem, ListItemText } from "@material-ui/core";

class Lista_movimientos extends Component {
  render() {
    //const { id, city, name, __typename } = this.props
    return (
      <Paper>
        <List>
          {this.props.registros.map(({ id, tipo, name, __typename, monto }) => (
            <ListItem key={id}>
              <ListItemText primary={name} />
              <ListItemText primary={tipo} />
              <ListItemText primary={monto.toFixed(2)} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}
const Pantalla_movimientos = connect(state => ({
  registros: state.movimientos.datos
}))(Lista_movimientos);

export default Pantalla_movimientos;
