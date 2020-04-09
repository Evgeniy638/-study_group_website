import { getTextError } from "../../../bll/selector";
import { connect } from "react-redux";
import ErrorComponent from "./ErrorComponent";

const mapStateToProps = (state) => ({
     textError: getTextError(state)
})

export default connect(mapStateToProps)(ErrorComponent)