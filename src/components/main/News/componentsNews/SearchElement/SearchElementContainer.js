import { connect } from "react-redux"
import { getTextFilter, getIsDisabledSearchButton } from "../../../../../bll/selector"
import SearchElement from "./SearchElement"
import { setTextFilterActionCreator, toggleSearchButtonActionCreator, changeCurrentPageAndRemoveNewsActionCreator } from "../../../../../bll/reducers/reducerNews"

const mapStateToProps = (state) => ({
     textFilter: getTextFilter(state),
     isDisabledSearchButton: getIsDisabledSearchButton(state)     
})

const mapDispatchToProps = (dispatch) => ({
     setTextFilter(newTextFilter){
          dispatch(setTextFilterActionCreator(newTextFilter))
     },
     changeCurrentPageAndRemoveNews(newPage){
          dispatch(changeCurrentPageAndRemoveNewsActionCreator(newPage))
     },
     disableSearchButton(){
          dispatch(toggleSearchButtonActionCreator(true))
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchElement)