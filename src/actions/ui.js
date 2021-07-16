import { types } from '../types/types';


// mostrar error
export const setError = ( err ) => ({ //err: string
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});


// inhabilitar boton login
export const startLoading = () => ({
    type: types.uiStartLoading,
    payload: true   //loading en true
});

export const finishLoading = () => ({
    type: types.uiFinishLoading,
    payload: false   //loading en false
});