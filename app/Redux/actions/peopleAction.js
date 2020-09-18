/**
 * Created by HP on 9/16/2020.
 */
import {
    FETCH_PEOPLE_REQUEST,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE
} from './types'
export const fetchPeopleRequest=()=>({
    type:FETCH_PEOPLE_REQUEST,
});
export const fetchPeopleFailure=(error)=>({
    type:FETCH_PEOPLE_FAILURE,
    payload:error
});
export const fetchPeopleSuccess=(json)=>({
    type:FETCH_PEOPLE_SUCCESS,
    payload:json
});
export const fetchPeople=()=>{
    console.log("i am calling");
    return async dispatch =>{
        dispatch(fetchPeopleRequest());
        try {
            let response = await fetch("https://randomuser.me/api/?results=15");
            let json = await response.json();
            dispatch(fetchPeopleSuccess(json.results))
        }
        catch(error){
            dispatch(fetchPeopleFailure(error))
        }

    }
}