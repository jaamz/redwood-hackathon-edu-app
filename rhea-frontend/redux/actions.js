import { REQUESTED_DATA, GET_ALL_CARDSETS, GET_CARDSET_BY_ID, CREATE_CARDSET, EDIT_CARDSET, DELETE_CARDSET } from './constants';
import axios from 'axios';

export const getAllCardSets = () => async dispatch => {
    try {
        let response = await axios.get('http://localhost:5000/api/flashcards/all')
        dispatch({ type: GET_ALL_CARDSETS, payload: response.data.cardsets})
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}

export const getCardSetById = (id) => async dispatch => {
    try {
        // dispatch({ type: REQUESTED_DATA });
        let response = await axios.get(`http://localhost:5000/api/flashcards/${id}`)
        dispatch({ type: GET_CARDSET_BY_ID, payload: response.data.cardSet})
    } catch (e) {
        // console.log(`Error: ${e}`);
        console.log(e.response.data)
    }
}

export const createCardSet = () => async dispatch => {
    try {
        let response = await axios.get('http://localhost:5000/api/flashcards/')
        dispatch({ type: CREATE_CARDSET, payload: response.data.message})
    } catch (e) {
        console.log(`Error: ${e}`);

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

