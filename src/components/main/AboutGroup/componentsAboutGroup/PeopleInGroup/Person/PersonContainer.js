import { getAdminMode } from "../../../../../../bll/selector";
import Person from "./Person";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
     adminMode: getAdminMode(state)
})

export default connect(mapStateToProps)(Person)