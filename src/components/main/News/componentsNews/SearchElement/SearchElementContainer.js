import { connect } from "react-redux"
import { getTextFilter } from "../../../../../bll/selector"
import SearchElement from "./SearchElement"
import { setTextFilterActionCreator, clearNewsActionCreator } from "../../../../../bll/reducers/reducerNews"


const mapStateToProps = (state) => ({
     textFilter: getTextFilter(state)
})

const mapDispatchToProps = (dispatch) => ({
     setTextFilter(newTextFilter){
          dispatch(setTextFilterActionCreator(newTextFilter))
     },
     clearNews(){
          dispatch(clearNewsActionCreator())
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchElement)