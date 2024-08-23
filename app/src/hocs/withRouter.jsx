import { useLocation, useNavigate } from "react-router-dom";

/**
 * Higher-order component that provides routing-related props to the wrapped component.
 *
 * @param {React.ComponentType} WrappedComponent - The component to be wrapped.
 * @returns {React.ComponentType} - The wrapped component with added router props.
 */
export default function withRouter(WrappedComponent) {
    /**
     * RouterComponent is a wrapper component that adds routing functionality
     * to the wrapped component's props, including location and navigation.
     *
     * @param {object} props - The props passed to the component.
     * @returns {React.ReactNode} - The JSX for the wrapped component with added router props.
     */
    function RouterComponent(props) {
        const location = useLocation();
        const navigate = useNavigate();

        // Pass the router-related props to the wrapped component
        return <WrappedComponent {...props} router={{ location, navigate }} />;
    }

    return RouterComponent;
}
