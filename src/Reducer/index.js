import {GET_CITY, GET_MEDELLIN} from '../Actions';

const initialState = {
    cities : {},
    all : [],
    medellin : {}
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_CITY:
            return {
             ...state,
             cities: action.payload,
             all: [...state.all , action.payload]
        };
        case GET_MEDELLIN:
            return {
              ...state,  
                medellin :  action.payload
        };
        default:
            return state;
    }
}

export default rootReducer;