import React, { ReactNode } from "react";

type ErrorProps = {
    children: ReactNode
}

const ErrorMessage: React.FC<ErrorProps> = (props: ErrorProps) => {
    return (
        <div className="alert alert-danger animated fadeIn">
            <h3>Error</h3>
            <p>{props.children}</p>
        </div>
    );
}

export default ErrorMessage;