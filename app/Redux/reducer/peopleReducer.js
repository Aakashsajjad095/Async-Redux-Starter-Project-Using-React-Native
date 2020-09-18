/**
 * Created by HP on 9/16/2020.
 */
import {
    FETCH_PEOPLE_REQUEST,
    FETCH_PEOPLE_SUCCESS,
    FETCH_PEOPLE_FAILURE
} from '../actions/types'
const initialState={
    isFetching:false,
    errorMessage:'',
    people:[],
}
const peopleReducer=(state=initialState,action)=>{
    switch (action.type){
        case FETCH_PEOPLE_REQUEST:
            return{...state,isFetching:true};
        case FETCH_PEOPLE_FAILURE:
            return {...state,isFetching:false,errorMessage:action.payload};
        case FETCH_PEOPLE_SUCCESS:
            return {...state,isFetching:false,people:action.payload};
        default:
            return state;
    }

}
export default peopleReducer;
