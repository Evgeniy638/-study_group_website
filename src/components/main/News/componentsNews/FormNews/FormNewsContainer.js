import { connect } from "react-redux"
import FormNewsClassContainer from "./FormNewsClassContainer"
import { writeNews } from "../../../../../bll/reducers/reducerNews"


const mapStateToProps = (state) => ({
     
})

const mapDispatchToProps = (dispatch) => ({
     writeNews(text, date, image){
          dispatch(writeNews(text, date, image))
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormNewsClassContainer)