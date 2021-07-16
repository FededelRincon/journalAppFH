import { types } from '../types/types';

/* //objeto de mi estado principal, o vacio o lo q esta abajo
    {
        uid: 65465465465,
        name: 'Fernando
    }
*/


// el estado inicial de mi state, NUNCA puede ser null o undefined, por eso en este caso esta vacio
export const authReducer = (state = { }, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }            
        
        case types.logout:
            return { };
    
        default:
            return state;
    }

}