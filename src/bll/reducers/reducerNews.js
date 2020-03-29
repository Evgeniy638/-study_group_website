import apiNews from "../../api/apiNews";

const GET_NEWS = "GET_NEWS"
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE"
const CLEAR_NEWS = "CLEAR_NEWS"
const STOP_GET_NEWS = "STOP_GET_NEWS"
const SET_TEXT_FILTER = "SET_TEXT_FILTER"
const WRITE_NEWS = "WRITE_NEWS"
const DELETE_NEWS = "DELETE_NEWS"
const TOGGLE_SEARCH_BUTTON = "TOGGLE_SEARCH_BUTTON"
const CHANGE_CURRENT_PAGE_AND_REMOVE_NEWS = "CHANGE_CURRENT_PAGE_AND_REMOVE_NEWS"

const initialState = {
    news: [],
    currentPage: 1,
    pageSize: 2,
    isAllNews: false,
    textFilter: "",
    isDisabledSearchButton: false
}

const reducerNews = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_CURRENT_PAGE_AND_REMOVE_NEWS:
            return {
                ...state,
                news:[],
                currentPage: action.newCurrentPage
            }
        case TOGGLE_SEARCH_BUTTON:
            return {
                ...state,
                isDisabledSearchButton: action.isDisabledSearchButton
            }
        case DELETE_NEWS:
            return {
                ...state,
                news: state.news.filter(item => item.id !== action.id)
            }
        case WRITE_NEWS:
            return{
                ...state,
                news:[
                    action.news,
                    ...state.news
                ]
            }
        case STOP_GET_NEWS:
            return{
                ...state,
                isAllNews: true
            }
        case GET_NEWS:
            return{
                ...state,
                news: [...state.news, ...action.news]
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newPage
            }
        case SET_TEXT_FILTER:
            return{
                ...state,
                textFilter: action.newTextFiler === undefined || action.newTextFiler === null 
                    ?"" 
                    :action.newTextFiler
            }
        case CLEAR_NEWS:
            return{
                ...initialState
            }
        default:
            return state;
    }
}

export default reducerNews

export const changeCurrentPageAndRemoveNewsActionCreator = (newCurrentPage) => ({
    type: CHANGE_CURRENT_PAGE_AND_REMOVE_NEWS,
    newCurrentPage
})

export const toggleSearchButtonActionCreator = (isDisabledSearchButton) => ({
    type: TOGGLE_SEARCH_BUTTON,
    isDisabledSearchButton
})

export const setTextFilterActionCreator = (newTextFiler) => ({type: SET_TEXT_FILTER, newTextFiler})

const getNewsActionCreator = (news) => ({type: GET_NEWS, news})

export const changeCurrentPageActionCreator = (newPage) => ({type: CHANGE_CURRENT_PAGE, newPage})

const stopGetNewsActionCreator = () => ({type: STOP_GET_NEWS})

export const clearNewsActionCreator = () => ({type: CLEAR_NEWS})

const writeNewActionCreator = (news) => ({type: WRITE_NEWS, news})

const deleteNewsActionCreator = (id) => ({type: DELETE_NEWS, id})

export const getNews = (currentPage, pageSize, textFilter) => async (dispatch) => {
    let text = textFilter === undefined || textFilter === null 
        ?"" 
        :textFilter

    let news = await apiNews.getListNews(currentPage, pageSize, text)
    
    if(news.length === 0)
        return dispatch(stopGetNewsActionCreator())

    dispatch(getNewsActionCreator(news))
    dispatch(toggleSearchButtonActionCreator(false))
}

export const writeNews = (text, date, image) => async (dispatch) => {
    let news = await apiNews.writeNews(text, date, image)

    dispatch(writeNewActionCreator(news))
}

export const deleteNews = (id) => async (dispatch) => {
    await apiNews.deleteNews(id)

    dispatch(deleteNewsActionCreator(id))
}
