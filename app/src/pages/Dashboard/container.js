import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as actionsPagesDashboard, name } from "@app/store/pages/dashboard";

export default function withContainer(WrappedComponent) {

    const mapStateToProps = (state) => state[name]

    const mapDispatchToProps = (dispatch) => bindActionCreators(actionsPagesDashboard, dispatch);

    return connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
        state: stateProps,
        actions: dispatchProps,
        ...ownProps,
    }))(WrappedComponent)
}
