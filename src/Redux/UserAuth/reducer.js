import { GETEMAIL } from "./actionTypes"

const initState={
    email:""
}

export const reducer=(state=initState,action)=>{
    switch(action.type){
        case GETEMAIL:
            return {...state,email:action.payload}
        default:
            return state
    }
}