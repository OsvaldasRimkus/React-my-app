import * as React from 'react';

const ErrorView: React.StatelessComponent<{}> = ({children}) => (
    <h2>
        404: Page not found = path does not exist.
    </h2>
)

export default ErrorView;