import React, { Component } from 'react';
class Pantalla_principal extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    cargar_datos() {
        var datos = [
            { id: 1, author: "Daniel Lo Nigro", text: "Hello ReactJS.NET World!" },
            { id: 2, author: "Pete Hunt", text: "This is one comment" },
            { id: 3, author: "Jordan Walke", text: "This is *another* comment" }
        ];
        this.setState({ data: datos });
    }

    procesar_objeto_recibido = (fila) => {
        this.setState((estado) => ({
            data: estado.data.concat([fila])
        }));
    }

    componentDidMount() {
        this.cargar_datos();
        //window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Programado por Marcos Cuadros</h1>
                <Pantallas informacion_actualizada={this.state.data} recibir_objeto_con_datos={this.procesar_objeto_recibido} />

            </div>
        );
    }
}

const Pantallas = (props) => (
    <div>
        <Pantalla_formulario extraer_objeto_digitado={props.recibir_objeto_con_datos} />
        <Pantalla_listado info={props.informacion_actualizada} />
    </div>
);

class Pantalla_formulario extends Component{
    constructor(props) {
        super(props);
        this.state = { autor: '', comentario: '' };
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.obtener_autor_digitado} value={this.state.autor} />
                <input type="text" onChange={this.obtener_comentario_digitado} value={this.state.comentario} />
                <button onClick={this.enviar_informacion_digitada} > Envio al Controlador Principal</button>
            </div>
        );
    }

    obtener_autor_digitado = (e) => {
        this.setState({ autor: e.target.value });
    }
    obtener_comentario_digitado = (e) => {
        this.setState({ comentario: e.target.value });
    }
    enviar_informacion_digitada = () => {
        if (this.state.autor === "" || this.state.comentario === "") {
            return;
        }
        var objeto_nuevo = {
            id: Date.now(),
            author: this.state.autor,
            text: this.state.comentario
        };
        this.props.extraer_objeto_digitado(objeto_nuevo);
        this.setState({ autor: '' });
        this.setState({ comentario: '' });
    }
};


const Formato_filas = (props) => (
    <tr><td>{props.registro.author}</td><td>{props.registro.text}</td></tr>
);

const Pantalla_listado = (props) => {
    var datos_tabla = [];
    props.info.map((detalle) => {
        datos_tabla.push(
          <Formato_filas registro={detalle} key={detalle.id} />
          );
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Mensaje</th>
                </tr>
            </thead>
            <tbody>{datos_tabla}</tbody>
        </table>
    );
};

export default Pantalla_principal;