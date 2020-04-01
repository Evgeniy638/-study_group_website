import apiTimetable from "../../api/apiTimetable"

const GET_TIMETABLE = "GET_TIMETABLE"
const CLEAR_DATA = "CLEAR_DATA"
const CREATE_LESSON = "CREATE_LESSON"
const DELETE_LESSON = "DELETE_LESSON"
const TOGGLE_FORM_BUTTON = "TOGGLE_FORM_BUTTON"

const initialState = {
    timetable: [],
    isDisabledFormButton: false
}

const reducerTimetable = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FORM_BUTTON:
            return {
                ...state,
                isDisabledFormButton: action.isDisabledFormButton
            }
        case DELETE_LESSON:
            return {
                ...state,
                timetable: state.timetable.filter(item => item.id !== action.id)
            }
        case CREATE_LESSON:
            return {
                ...state,
                timetable: [...state.timetable, action.lesson].sort((l1, l2) => l1.lessonNumber - l2.lessonNumber)
            }
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

export const toggleFormButtonActionCreator = (isDisabledFormButton) => ({ type: TOGGLE_FORM_BUTTON, isDisabledFormButton })

export const clearDataTimetableActionCreator = () => ({ type: CLEAR_DATA })

const getTimetableActionCreator = (timetable) => ({ type: GET_TIMETABLE, timetable })

const createLessonActionCreator = (lesson) => ({ type: CREATE_LESSON, lesson })

const deleteLessonActionCreator = (id) => ({ type: DELETE_LESSON, id })

export const getTimetableThunkCreator = () => async (dispatch) => {
    const timetable = await apiTimetable.getTimetable()
    dispatch(getTimetableActionCreator(timetable))
}

export const createLessonThunkCreator = (lesson) => async (dispatch) => {
    const oldLesson = await apiTimetable.getLesson(lesson.lessonNumber)

    if (oldLesson !== null && oldLesson !== undefined) {
        const newLesson = await apiTimetable.putLesson(lesson, oldLesson.id)
        dispatch(deleteLessonActionCreator(oldLesson.id))
        dispatch(createLessonActionCreator(newLesson))
        
        dispatch(toggleFormButtonActionCreator(false))
    } else {
        const newLesson = await apiTimetable.createLesson(lesson)
        dispatch(createLessonActionCreator(newLesson))

        dispatch(toggleFormButtonActionCreator(false))
    }
}

export const deleteLessonThunkCreator = (id) => async (dispatch) => {
    await apiTimetable.deleteLesson(id)
    dispatch(deleteLessonActionCreator(id))
}