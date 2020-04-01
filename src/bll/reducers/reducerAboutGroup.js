import apiAboutGroup from "../../api/apiAboutGroup"

const GET_GROUP = "GET_GROUP"
const CLEAR_STATE_ABOUT_GROUP = "CLEAR_STATE_ABOUT_GROUP"
const DELETE_PERSON = "DELETE_PERSON"
const CREATE_PERSON = "CREATE_PERSON"
const TOGGLE_IS_DISABLED_PERSON_FORM = "TOGGLE_IS_DISABLED_PERSON_FORM"

const initialState = {
    group: [],
    isDisabledPersonForm: false
}

const reducerAboutGroup = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_DISABLED_PERSON_FORM:
            return {
                ...state,
                isDisabledPersonForm: action.isDisabledPersonForm
            }
        case CREATE_PERSON:
            return {
                ...state,
                group: [...state.group, action.person].sort((p1, p2) => {
                    if (p1.surname > p2.surname) {
                        return 1
                    } else if (p1.surname === p2.surname) {
                        return 0
                    } else {
                        return -1
                    }
                })
            }
        case DELETE_PERSON:
            return {
                ...state,
                group: state.group.filter((person) => person.id !== action.id)
            }
        case CLEAR_STATE_ABOUT_GROUP:
            return {
                ...initialState
            }
        case GET_GROUP:
            return {
                ...state,
                group: [...action.group]
            }
        default:
            return state
    }
}

export default reducerAboutGroup

export const toggleDisabledPersonFormActionCreator = (isDisabledPersonForm) => ({
    type: TOGGLE_IS_DISABLED_PERSON_FORM,
    isDisabledPersonForm
})

const deletePersonActionCreator = (id) => ({ type: DELETE_PERSON, id })

export const clearStateAboutGroupActionCreator = () => ({ type: CLEAR_STATE_ABOUT_GROUP })

const getGroupActionCreator = (group) => ({ type: GET_GROUP, group })

const createPersonActionCreator = (person) => ({ type: CREATE_PERSON, person })

export const createPersonThunkCreator = (person) => async (dispatch) => {
    const newPerson = await apiAboutGroup.createPerson(person)

    dispatch(createPersonActionCreator(newPerson))

    dispatch(toggleDisabledPersonFormActionCreator(false))
}

export const deletePersonThunkCreator = (id) => async (dispatch) => {
    await apiAboutGroup.deletePerson(id)

    dispatch(deletePersonActionCreator(id))
}

export const getGroupThunkCreator = () => async (dispatch) => {
    const group = await apiAboutGroup.getGroup()

    dispatch(getGroupActionCreator(group))
}
