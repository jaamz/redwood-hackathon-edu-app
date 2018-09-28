import { TEST } from './constants';

const initialState = {
    flashCards: []

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return state;
        case GET_ALL_CARDS:
            return { ...state, flashCards: action.payload };
        default:
            return state;
    }
}

export default rootReducer;