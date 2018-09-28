import { TEST, GET_ALL_CARDS } from './constants';
import axios from 'axios';


export const testAction = () => ({
    type: TEST
})

export const getAllCards = async () => dispatch => {
    try {
        let response = await axios.get('http://localhost:5000/api/flashcards/')
        dispatch({ type: GET_ALL_CARDS, payload: response.data.message})
    } catch (e) {
        console.log(`Error: ${e.data.message}`);// might be wronrg about this .data.message
    }
}