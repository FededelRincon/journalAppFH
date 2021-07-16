import { useState } from 'react'

export const useForm = ( initialState = {} ) => { //initialState= seria el name, email, password, todos con string vacio como default, y sino las cosas q vaya escribiendo

    const [values, setValues] = useState( initialState )

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }

    const handleInputChange = ({ target }) => {
        
        setValues({
            ...values,
            [ target.name ]: target.value
            //target.name, viene del input -> name="name"
            //target.value viene del input -> value = { name } 
        })
    }

    return [ values, handleInputChange, reset ]

}