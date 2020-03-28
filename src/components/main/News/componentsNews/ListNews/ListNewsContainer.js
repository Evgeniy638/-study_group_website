import { getCurrentPage, getPageSize, getListNews, getIsAllNews, getTextFilter } from "../../../../../bll/selector";
import { clearNewsActionCreator, getNews, changeCurrentPageActionCreator } from "../../../../../bll/reducers/reducerNews";
import { connect } from "react-redux";
import ListNewsClassContainer from "./ListNewsClassContainer";


const mapStateToProps = (state) => ({
     currentPage: getCurrentPage(state),
     pageSize: getPageSize(state),
     news: getListNews(state),
     isAllNews: getIsAllNews(state),
     textFilter: getTextFilter(state)
})

const mapDispatchToProps = (dispatch) => ({
     clearNews() {
          dispatch(clearNewsActionCreator())
     },
     getNews(currentPage, pageSize, textFilter){
          dispatch(getNews(currentPage, pageSize, textFilter))
     },
     changeCurrentPage(newPage){
          dispatch(changeCurrentPageActionCreator(newPage))
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListNewsClassContainer)