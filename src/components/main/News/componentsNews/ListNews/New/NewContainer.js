import { getAdminMode } from "../../../../../../bll/selector";
import { connect } from "react-redux";
import New from "./New";
import { deleteNews } from "../../../../../../bll/reducers/reducerNews";

const mapStateToProps = (state) => ({
     adminMode: getAdminMode(state)
})

const mapDispatchToProps = (dispatch) => ({
     deleteNews(id){
          dispatch(deleteNews(id))
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(New)