import { Cliente } from './cliente';
import { meetupsQuery1, MEETUP_MUTATION } from './gql';

class Service {
  
    proceso_consulta = () => {
       return Cliente.query({
        query: meetupsQuery1,
        variables: {first: 50}
      }).then((response) => {
     if (response.data.allMeetups) { 
       return response.data.allMeetups;
        }
      })
    }
    
    proceso_insertar = (lugar, nombre) => {
      return Cliente.mutate({
        mutation: MEETUP_MUTATION,
        variables: {city: lugar, name: nombre}
        }).then((response) => { 
          if (response.data.createMeetup){
            return response.data.createMeetup;
          }
        })
    }
}

export const Servicio = new Service();