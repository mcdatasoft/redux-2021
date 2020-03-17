const detalle_inicial = {
  datos: [],
  personas: [],
  procesando: false,
  finalizado: false,
  director: "marquiño cuadros"
};
export default function sistemaTransaccional(
  detalle = detalle_inicial,
  estructura
) {
  switch (estructura.type) {
    case "CARGA":
      return { ...detalle, procesando: true };
    case "CARGA_ERROR":
      return { ...detalle, procesando: false, error: estructura.payload };
    case "NUEVA_OPERACION":
      return {
        ...detalle,
        procesando: false,
        finalizado: true,
        datos: detalle.datos.concat([estructura.valores.objeto])
      };
    case "RECUPERAR_SERVER":
      console.log(estructura.payload.resp);
      return {
        ...detalle,
        procesando: false,
        finalizado: true,
        datos: estructura.payload.resp
      };

    case "ADD_REGISTRO":
      //console.log(estructura.author);
      console.log(todo(undefined, estructura));
      return [...detalle, todo(undefined, estructura)];
    case "TOGGLE_REGISTRO":
      return detalle.map(t => todo(t, estructura));
    default:
      return detalle;
  }
}
