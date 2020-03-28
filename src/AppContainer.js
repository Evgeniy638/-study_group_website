import { getAdminMode } from "./bll/selector";
import { connect } from "react-redux";
import App from "./App";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { enableAdminModeActionCreator, disableAdminModeActionCreator } from "./bll/reducers/reducerHeader";


const mapStateToProps = (state) => ({
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
)(App)