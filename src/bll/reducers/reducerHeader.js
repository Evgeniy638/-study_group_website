import { PATH_NEWS, PATH_ABOUT_GROUP, PATH_TIMETABLE } from "../../paths"

const ENABLE_IS_ADMIN = "ENABLE_IS_ADMIN"
const DISABLE_IS_ADMIN = "DISABLE_IS_ADMIN"

const initialState = {
    arrayMenu: [
        {
            path: PATH_ABOUT_GROUP,
            text: "Информация о группе"
        },
        {
            path: PATH_TIMETABLE,
            text: "Расписание"
        },
        {
            path: PATH_NEWS,
            text: "Новости"
        }
    ],
    adminMode: false
}

const reducerHeader = (state=initialState, action) => {
    switch(action.type){
        case ENABLE_IS_ADMIN:
            return {
                ...state,
                adminMode: true
            }
        case DISABLE_IS_ADMIN:
            return{
                ...state,
                adminMode: false
            }
        default:
            return state
    }
}

export default reducerHeader

export const enableAdminModeActionCreator = () => ({type: ENABLE_IS_ADMIN})
export const disableAdminModeActionCreator = () => ({type: DISABLE_IS_ADMIN})
