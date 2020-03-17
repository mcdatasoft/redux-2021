import React, { Component } from "react";
class Pantalla_formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { autor: "", comentario: "" };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.obtener_autor_digitado}
          value={this.state.autor}
        />
        <input
          type="text"
          onChange={this.obtener_comentario_digitado}
          value={this.state.comentario}
        />
        <button onClick={this.enviar_informacion_digitada}>
          {" "}
          Envio al Controlador Principal
        </button>
      </div>
    );
  }
  obtener_autor_digitado = e => {
    this.setState({ autor: e.target.value });
  };
  obtener_comentario_digitado = e => {
    this.setState({ comentario: e.target.value });
  };
  enviar_informacion_digitada = () => {
    if (this.state.autor === "" || this.state.comentario === "") {
      return;
    }
    var objeto_nuevo = {
      id: "",
      city: this.state.autor,
      name: this.state.comentario,
      __typename: ""
    };
    this.props.extraer_objeto_digitado(objeto_nuevo);
    this.setState({ autor: "" });
    this.setState({ comentario: "" });
  };
}
export default Pantalla_formulario;
