import { GET_ALL_CARDSETS, GET_CARDSET_BY_ID, CREATE_CARDSET, EDIT_CARDSET, DELETE_CARDSET } from './constants';

const initialState = {
    flashCardSets: [],
    selectedCardSet: {}

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARDSETS:
        console.log("Trying to get all cardsets");
            return { ...state, flashCardSets: action.payload };
        case GET_CARDSET_BY_ID:
        consoe.log("Trying to get cardset by ID")
            return { ...state, selectedCardSet: action.payload };
        case CREATE_CARDSET:
            return { ...state, flashCardSets: [...flashCardSets, action.payload] };
        case EDIT_CARDSET:
            return { ...state, flashCardSets: action.payload };
        case DELETE_CARDSET:
            return { ...state, flashCardSets: action.payload };
        default:
            return state;
    }
}

export default rootReducer;