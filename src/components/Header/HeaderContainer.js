import { connect } from "react-redux"
import Header from "./Header"
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { enableAdminModeActionCreator, disableAdminModeActionCreator } from "../../bll/reducers/reducerHeader"
import { getArrayMenu, getAdminMode } from "../../bll/selector"

const mapStateToProps = (state) => ({
    arrayMenu: getArrayMenu(state),
    adminMode: getAdminMode(state)
})

const mapDispatchToProps = (dispatch) => ({
    enableAdminMode(){
        dispatch(enableAdminModeActionCreator())
    },
    disableAdminMode(){
        dispatch(disableAdminModeActionCreator())
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Header)