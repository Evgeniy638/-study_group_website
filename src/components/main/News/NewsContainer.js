import { connect } from "react-redux"
import News from "./News"
import { getAdminMode } from "../../../bll/selector"

const mapStateToProps = (state) => ({
     adminMode: getAdminMode(state)
})

export default connect(mapStateToProps)(News)