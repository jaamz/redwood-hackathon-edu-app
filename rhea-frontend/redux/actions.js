import { GET_ALL_CARDSETS, GET_CARDSET_BY_ID, CREATE_CARDSET, EDIT_CARDSET, DELETE_CARDSET } from './constants';
import axios from 'axios';

export const getAllCardSets = () => async dispatch => {
    try {
        let response = await axios.get('http://localhost:5000/api/flashcards/all')
        console.log(response)
        dispatch({ type: GET_ALL_CARDSETS, payload: response.data.cardsets})
    } catch (e) {

        console.log(`Error: ${e}`);

        // console.log(`Error: ${e.response.data}`);// might be wronrg about this .data.message
    }
}

export const getCardSetById = (id) => async dispatch => {
    try {
        console.log("ID:",id);
        let response = await axios.get(`http://localhost:5000/api/flashcards/${id}`)
        console.log("response: ", response.data.cardSet)
        dispatch({ type: GET_CARDSET_BY_ID, payload: response.data.cardSet})
        console.log("dispatch passed");
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}

export const createCardSet = (card) => async dispatch => {
    try {
        console.log('submitted card:',card)
        let response = await axios.post('http://localhost:5000/api/flashcards/', card)
        console.log('respones:', response);
        dispatch({ type: CREATE_CARDSET, payload: response.data})
    } catch (e) {
        // console.log(`Error: ${e.response.data}`);
        console.log(e.response.data)
    }
}

export const editCardSet = (id) => async dispatch => {
    try {
        let response = await axios.get('http://localhost:5000/api/flashcards/')
        dispatch({ type: EDIT_CARDSET, payload: response.data.message})
    } catch (e) {
        console.log(`Error: ${e}`);

        // console.log(`Error: ${e.response.data}`);
    }
}

export const deleteCardSet = (id) => async dispatch => {
    try {
        let response = await axios.get('http://localhost:5000/api/flashcards/')
        dispatch({ type: DELETE_CARDSET, payload: response.data.message})
    } catch (e) {
        console.log(`Error: ${e}`);

        // console.log(`Error: ${e.response.data}`);
    }
}

