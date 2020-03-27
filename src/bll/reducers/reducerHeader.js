import { PATH_NEWS, PATH_ABOUT_GROUP, PATH_TIMETABLE } from "../../paths"

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
            text: "новости"
        }
    ]
}

const reducerHeader = (state=initialState, action) => state

export default reducerHeader