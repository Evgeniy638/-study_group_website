import { connect } from "react-redux"
import Header from "./Header"

const mapStateToProps = (state) => ({
    arrayMenu: state.stateAoutGroup.arrayMenu
})

export default connect(mapStateToProps)(Header)