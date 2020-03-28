import apiNews from "../../api/apiNews";

const GET_NEWS = "GET_NEWS"
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE"
const CLEAR_NEWS = "CLEAR_NEWS"
const STOP_GET_NEWS = "STOP_GET_NEWS"
const SET_TEXT_FILTER = "SET_TEXT_FILTER"

const initialState = {
    news: [],
    currentPage: 1,
    pageSize: 2,
    isAllNews: false,
    textFilter: ""
}

const reducerNews = (state=initialState, action) => {
    switch(action.type){
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

export const setTextFilterActionCreator = (newTextFiler) => ({type: SET_TEXT_FILTER, newTextFiler})

const getNewsActionCreator = (news) => ({type: GET_NEWS, news})

export const changeCurrentPageActionCreator = (newPage) => ({type: CHANGE_CURRENT_PAGE,newPage})

const stopGetNewsActionCreator = () => ({type: STOP_GET_NEWS})

export const clearNewsActionCreator = () => ({type: CLEAR_NEWS})

export const getNews = (currentPage, pageSize, textFilter) => async (dispatch) => {
    let text = textFilter === undefined || textFilter === null 
        ?"" 
        :textFilter

    let news = await apiNews.getListNews(currentPage, pageSize, text)
    
    if(news.length === 0)
        return dispatch(stopGetNewsActionCreator())

    dispatch(getNewsActionCreator(news))
}