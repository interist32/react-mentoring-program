import React from 'react';


export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.error) {
            return (
                <div class="global-error">
                    <h1 class="global-error__title">OMG! :(</h1>
                    <h2 class="global-error__error">{this.state.error.toString()}</h2>
                    <details class="global-error__details">{this.state.errorInfo.componentStack}</details>
                </div>
            );
        }

        return this.props.children;
    }
}