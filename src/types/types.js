
//algunos reaccionan al reducer de auth, otros de ui otros de notes
export const types = {

    // login
    login: '[Auth] Login',
    logout: '[Auth] Logout',

    // mensaje de error
    uiSetError: '[UI] set Error ',
    uiRemoveError: '[UI] remove Error ',


    // desabilitar boton login/register
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    // notas
    notesAddNew: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Updated note',
    notesFileUrl: '[Notes] Updated image url',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning',
}