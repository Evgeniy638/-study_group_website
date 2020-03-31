import apiTimetable from "../../api/apiTimetable"

const GET_TIMETABLE = "GET_TIMETABLE"
const CLEAR_DATA = "CLEAR_DATA"

const initialState = {
    timetable:[]
}

const reducerTimetable = (state=initialState, action) => {
    switch(action.type){
        case CLEAR_DATA:
            return {
                ...initialState
            }
        case GET_TIMETABLE:
            return {
                ...state,
                timetable: action.timetable
            }
        default:
            return state
    }
}

export default reducerTimetable

export const clearDataTimetableActionCreator = () => ({type: CLEAR_DATA})

const getTimetableActionCreator = (timetable) => ({type: GET_TIMETABLE, timetable})

export const getTimetableThunkCreator = (timetable) => async (dispatch) => {
    const timetable = await apiTimetable.getTimetable()

    dispatch(getTimetableActionCreator(timetable))
}