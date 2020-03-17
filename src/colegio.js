const todo = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      //console.log(action.text);
      return {
        id: action.id,
        city: action.author,
        name: action.text
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};
/*
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}
*/
//export default todos

const initialState = {
  datos: [
    {
      id: "1",
      city: "Daniel Lo Nigro",
      name: "Hello ReactJS.NET World!",
      __typename: ""
    },
    { id: "2", city: "Pete Hunt", name: "This is one comment", __typename: "" },
    {
      id: "3",
      city: "Jordan Walke",
      name: "This is *another* comment",
      __typename: ""
    }
  ],
  //datos: [],
  personas: [],
  procesando: false,
  finalizado: false,
  director: "marquiño cuadros"
};
export default function alumnos(state = initialState, estructura) {
  switch (estructura.type) {
    case "CARGANDO":
      return { ...state, procesando: true };
    case "CARGA_FALLIDA":
      return { ...state, procesando: false, error: estructura.payload };
    case "CARGA_COMPLETA":
      console.log(estructura.payload.objeto);
      return {
        ...state,
        procesando: false,
        finalizado: true,
        datos: state.datos.concat([estructura.payload.objeto])
      };

    case "RETRIEVE_SERVER":
      console.log(estructura.payload.resp);
      return {
        ...state,
        procesando: false,
        finalizado: true,
        datos: estructura.payload.resp
      };

    case "ADD_TODO":
      //console.log(estructura.author);
      console.log(todo(undefined, estructura));
      return [...state, todo(undefined, estructura)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, estructura));
    default:
      return state;
  }
}
/*function todos(arreglo = initialState, estructura) {
  switch (estructura.type) {
    case 'ADD_CURSOS':
      const data = Array.from(arreglo);
      data.push(estructura.payload.text)
      return data;
    case 'VER_NIVELES':
      return arreglo;
    case 'VER_ALUMNOS':
      const alumnos = {
        alumnado: ['Renso', 'Carlos', 'Marcos'],
      };
      return alumnos;
    default:
      const cursos = {
        todos: ['.net', 'phyton', 'polymer'],
      };
      return cursos;
  }
}
*/
