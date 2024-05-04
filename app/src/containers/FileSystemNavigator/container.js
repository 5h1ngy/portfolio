import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as actionsPagesDashboard, name as namePagesDashboard } from "@app/store/pages/dashboard";
import { actions as actionsFileSystemNavigator, name as nameFileSystemNavigator } from "@app/store/containers/fileSystemNavigator";

export default function withContainer(WrappedComponent) {

    const mapStateToProps = (state) => ({
        [namePagesDashboard]: state[namePagesDashboard],
        [nameFileSystemNavigator]: state[nameFileSystemNavigator],
    })

    const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign({},
        actionsFileSystemNavigator, actionsPagesDashboard
    ), dispatch);

    return connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
        state: stateProps,
        actions: dispatchProps,
        ...ownProps,
    }))(WrappedComponent)
}
