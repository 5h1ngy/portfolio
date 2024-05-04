import _ from "lodash";

/**
 * Higher-order component that injects route configuration data
 * into the wrapped component's props.
 *
 * @param {React.ComponentType} WrappedComponent - The component to be wrapped.
 * @returns {React.ComponentType} - The wrapped component with injected route configuration data.
 */
import { useRouteLoaderData } from "react-router-dom";

export default function withRouteConfig(configKey, WrappedComponent) {
    /**
     * ConfigComponent is a wrapper component that uses useRouteLoaderData
     * to fetch route configuration data and injects it into the wrapped component's props.
     *
     * @param {object} props - The props passed to the component.
     * @returns {React.ReactNode} - The JSX for the wrapped component with injected config prop.
     */
    function ConfigComponent(props) {
        const { config } = useRouteLoaderData('root');

        return <WrappedComponent {...props} config={_.get(config, configKey, undefined)} />;
    }

    return ConfigComponent;
}
