import { connect } from "react-redux"
import AboutGroup from "./AboutGroup"
import { getAdminMode } from "../../../bll/selector"

const mapStateToProps = (state) => ({
     adminMode: getAdminMode(state)
})

export default connect(mapStateToProps)(AboutGroup)