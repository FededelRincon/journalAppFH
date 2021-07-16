import Swal from 'sweetalert2';

import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { finishLoading, startLoading } from "./ui"
import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user }) => {
            dispatch( login( user.uid, user.displayName) )
            dispatch( finishLoading() )
                
        })
            .catch(e => {
                // console.log(e);
                dispatch( finishLoading() );
                Swal.fire(
                    'Error',
                    'The email o password is incorrect. Please try again!',
                    'error'
                );
        })

    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    //como es asincrono, hago el return de...
    return (dispatch) => {

        dispatch( startLoading() );

        firebase.auth().createUserWithEmailAndPassword( email, password )   //mando email y password
            .then( async ({ user }) => {
                
                await user.updateProfile({ displayName: name }); //y aca mando el name, para completar todos los datos
                
                dispatch( login( user.uid, user.displayName));
                dispatch( finishLoading() )


            })
            .catch(e => {
                // console.log(e);
                Swal.fire(
                    'Error',
                    'The email is already taken. Please try to log in!',
                    'error'
                );
            })
    }

}



export const startGoogleLogin = () => {
    return ( dispatch ) => {
        
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName)
                )
            } )
    }
}



export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut()
            
        dispatch( logout() );
        dispatch( noteLogout() )
    }
}

export const logout = () => ({
    type: types.logout
})